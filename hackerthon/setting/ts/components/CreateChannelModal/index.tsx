import React, { useCallback , FC } from 'react'
import { Button , Input, Label } from '@pages/Login/style'

import  Modal from '@components/Modal'
import useInput from '@hooks/useInput'
import axios from 'axios';
import { useParams } from 'react-router';
import { error } from 'console';
import { toast } from 'react-toastify';
import { IUser , IChannel } from '@typings/db';
import fetcher from '@utils/fetcher';
import useSWR from 'swr'

interface Props {
    show : boolean;
    onCloseModal : () => void;
    setShowCreateChannelModal: (flag: boolean) => void;

}





// 그냥 Modal 이랑 구조가 비슷함
    const CreateChannelModal : FC<Props> = ( { show, onCloseModal , setShowCreateChannelModal } ) => {

        const {workspace , channel} = useParams<{ workspace : string; channel : string }> ();  
            // [해석]
                // useParams hook 을 사용해서, params 사용해서 저장한 데이터를, 이걸로 꺼내서 쓴다.
                // 주소창이 데이터 저장소 역할을 하는 순간 ⭐⭐⭐⭐⭐ 


        const [newChannel , onChangeNewChannel , setNewChannel] = useInput('')
        console.log( "newChannel 값 들어왔나 " ,  newChannel )
        // 커스텀 훅을 만들어서 이곳에서도 쓴다. 



        // 새롭게 가져와서 revalidate 한번 하기
        const {data : userData} = useSWR<IUser | false>(
            `/api/users`,
            fetcher,
            {
                dedupingInterval : 2000
            })
        
        // revalidateChannel 에서 생성 하자마자 채널 리스트 다시 불러오게 하기 👇
        const {mutate : revalidateChannel} = useSWR<IChannel[]>(
            userData? `/api/workspaces/${workspace}/channels` : null, 
            fetcher)
                // [해석 ⭐⭐⭐⭐⭐]
                    // 1. swr 이 채널 리스트 관리하고 있다가 
                    // 2. 하나 추가하면, revalidateChannel() 이걸로 다시 가져오게 될 것


        // 화면을 먼저 만들고 -> 그 다음 이벤트 리스너 부분을 만드는게 더 효율적임!
        const onCreateChannel = useCallback ( (e) => {
            
            // 이렇게 하면, 두 번 클릭되는 게 안 됨 
            e.preventDefault();

            axios.post(`/api/workspaces/${workspace}/channels` , {
                // ${workspace} : 어떤 워크스페이스에서 생성했는지 알려준다. 
                // 이 workspace 는 어디서 가져와? -> 주소에서 
                // 그러려면, 미리 라우트 파라미터를 해놨어야 해! 

                name : newChannel,  // 새롭게 생성할 채널의 이름을 전달

            }, {
                withCredentials : true // 누가 생성했는지는 알 수 있음. 
                
            }).then( ()=>{

                // revalidate 로 채널 이름 갱신 | 이걸 넣어야 추가한 체널 이름이 나옴 ❓❓
                // revalidateUser()    // 이건 gpt 추천대로 해본 것

                // revalidateChannel 에서 생성 하자마자 채널 리스트 다시 불러오게 하기 👇
                revalidateChannel()

                setShowCreateChannelModal(false);
                setNewChannel('')

            }).catch( (error)=>{
                // 에러가 나면, 디렉토리 구조를 보여주기
                console.dir(error);
                // 사용자에게 에러 상황 알려주기, position 은 나오는 위치를 의미. 
                toast.error(error.response?.data, { position : 'bottom-center' })

            } )
            } , [newChannel , revalidateChannel , setNewChannel]) 
            // [알게된 점] 
                // 아, 서버에 보낼 때, useCallback 을 써서, 이 부분이 변화되었을 때만 보내는 구나
            

        return (

            <Modal show={show} onCloseModal={onCloseModal} >
                <form onSubmit={onCreateChannel}> 

                    {/* 워크스페이스에 뜰 이름 */}
                    <Label id="channel-label">
                        <span>채널</span>
                        <Input id='channel' value={newChannel} onChange={onChangeNewChannel} />   
                        {/* <Input>  </Input> 이렇게 하게 되면, 안 됨.
                            왜냐면, ts 에서 input 은 void 요소 이기 때문에, 다른 요소, 텍스트 넣을 수 없음.
                        */}
                    </Label>

                    {/* 버튼 */}
                    <Button type='submit' > 생성하기 </Button>

                </form>
            </Modal>
    )
}

export default CreateChannelModal;