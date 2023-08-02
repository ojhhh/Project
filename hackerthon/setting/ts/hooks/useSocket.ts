

// hooks 로 공통된 로직을 추출해낼 수 있음!

import { useCallback } from 'react'
import { io, Socket } from 'socket.io-client';

const backUrl = 'http://localhost:3095';
    // 이렇게 저장해야 -> 배포할 때 손을 덜 수 있음. 

// 여러개의 workspace 에 들어간 상황을 관리하기 위해서 sockets 변수 만들기
const sockets:{ [key:string]: Socket } = {};
    // 타입 스크립트는 빈객체, 빈배열은 타이핑 해줘야 함
    // sockets[workspace] 이걸 -> SocketIOClient.socket 이렇게 타이핑 해줌 
    // 워크스페이스를 -> [key:string]: 이렇게 타이핑. 왜냐면, 워크스페이스는 아무거나 들어올 수 있기 때문에. 
        // 그래서, 어떤 key 가 들어오건, 문자열이기만 하면 된다! 라는 의미. 
    // 결국, 문자열 key 에 , 값은 SocketIOClient.socket 이걸로 

const useSocket = (workspace? : string): [Socket | undefined , () => void] => {

    console.log("rerender" , workspace);

    // 함수로 감싸준 이유는 socket.io 전용 훅스 강의 15:00 부근 | 이 변수가 되면, 이게 안되는 상황 
    const disconnect = useCallback ( () => {
        if(workspace) {
            console.log("소켓 연결 끊음")

            // 한번 맺은 연결을 끊는다. 
            sockets[workspace].disconnect()
                // hapse 에 들어갔다가 -> test 워크스페이스로 가게 되는 거면, hapse 에서 disconnect 해줘야 함
                // 만약, 이게 없으면, hapse, test 둘 다에 메시지가 가게 됨
            
            // 연결 끊을 때는 지워버리기 
            delete sockets[workspace]

        }
    } , [workspace])
    
    // 워크스페이스는 필수임. 만약, 워크스페이스가 없다면, return 해주기 
    if(!workspace){
        return [undefined, disconnect];
    }
    
    // 이렇게만 해도 서버와 소통할 수 있음. 
    if(!sockets[workspace]) {
        // 기존에 없다면 -> 만들고, 있었다면 굳이 안 만들어도 됨 -> 이렇게 하면, socket 이 계속 불리는 일을 막음
        sockets[workspace] = io(`${backUrl}/ws-${workspace}`, {
            // '연결할 때, polling 하지 말고, 웹소켓만 써라'
            transports : ['websocket'],
        });
        console.info('create socket' , workspace, sockets[workspace]);
        sockets[workspace].on('connect_error' , (err) => {
            console.log(err);
            console.log(`🐞connect_error due to ${err.message}`)
        })
    }
    

    // // 서버한테, 이렇게 데이터 주기
    // sockets[workspace].emit('hello' , 'world')  // hello 라는 이벤트에, world 라는 데이터가 넘어감
    //     // 첫번째 인자 = 이벤트 명 
    //     // 두번째 인자 = 데이터 

    // // '⭐이벤트명이 일치⭐' 하면 -> 서버에서 프론트로 데이터가 오면 이렇게 받기 
    //     // 이벤트 명 같은 것은, api 문서에 저장되어 있음. 
    //     sockets[workspace].on('message' , (data) => {
    //     console.log(data)
    // })


    return [sockets[workspace] , disconnect]
        // 이렇게 구조를 잡아주면, 똑같이 나갈 것 임 ⭐⭐ 
        // 리턴 모양은 같아야 함 ⭐⭐
}


export default useSocket