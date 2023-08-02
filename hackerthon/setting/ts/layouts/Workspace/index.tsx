
// 임포트
import axios from 'axios'
import React, { VFC , useCallback, useEffect, useState } from 'react'
import useSWR from 'swr'
import fetcher from '@utils/fetcher'
import { Redirect, Switch, useParams } from 'react-router'
import {Route , Link} from 'react-router-dom'

import { toast, ToastContainer } from 'react-toastify';

declare global {
  interface Window {
    ethereum: any;
  }
}

// 컴포넌트
import Menu from '@components/Menu'
import Modal from '@components/Modal'
import CreateChannelModal from '@components/CreateChannelModal'
import InviteWorkspaceModal from '@components/inviteWorkspaceModal'
import InviteChannelModal from '@components/inviteChannelModal'
import DMList from '@components/DMList'
import ChannelList from '@components/ChannelList'

import { AddButton, 
    Channels, 
    Chats, 
    Header, 
    LogOutButton , 
    MenuScroll, 
    ProfileImg, 
    ProfileModal, 
    RightMenu, 
    WorkspaceButton, 
    WorkspaceModal, 
    WorkspaceName, 
    WorkspaceWrapper, 
    Workspaces } from '@layouts/Workspace/style'

import { Button, Input, Label } from '@pages/Login/style'

import useInput from '../../hooks/useInput'




// 페이지들은 코드스플리팅 해서 가져오기
import loadable from '@loadable/component';
const Channel = loadable( () => import ('@pages/Channel') )
const DirectMessage = loadable( () => import ('@pages/DirectMessage') )

import gravatar from 'gravatar'
import { IChannel, IUser } from '@typings/db'
import useSocket from '@hooks/useSocket'
import { setTimeout } from 'timers/promises'



const Workspace: VFC = () => {

      const [account, setAccount] = useState<string>("");
    
      const getAccount = async () => {
        try {
          if (window.ethereum) {
            const accounts: string[] = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            setAccount(accounts[0]);
            console.log(account);
            // window.location.href = "http://localhost:3090/workspace/hapse/channel/공부방"
          } else {
            alert("Install Metamask!");
            window.location.href = "https://metaextentions.com/";
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getAccount();
      }, []); 

      useEffect(()=>{
      },[account])
    

    // [해석]
        // children 을 넣으니 -> type 에러가 나서 -> FC 를 붙여줌
        // FC 안에 children 이 있어서, FC 를 임포트 하면 에러 사라짐
    // Workspace 에서 children 이 더 이상 필요 없으면 -> 타입을 VFC 로 바꿈.

    // 메뉴 토글 함수 state 관리
    const [showUserMenu, setShowUserMenu] = useState(false);
    // 워크 스페이스 만드는 state
    const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(false);
    
    // invite workspace modal
    const [showInviteWorkspaceModal, setShowInviteWorkspaceModal] = useState(false);
    
    // invite channel modal
    const [showInviteChannelModal, setShowInviteChannelModal] = useState(false);

    // 커스텀 훅을 쓰는데 😥😥😥 
    // const [newWorkspace , onChangeNewWorkspace] = useState()

    const [showWorkspaceModal , setShowWorkspaceModal ] = useState(false)

    const [showCreateChannelModal , setShowCreateChannelModal] = useState(false)


    const [newWorkspace, onChangeNewWorkspace, setNewWorkspace] = useInput('');
    const [newUrl, onChangeNewUrl, setNewUrl] = useInput('');



    // url 에서 wordkspace 주소 가져오기 
    const {workspace} = useParams <{workspace : string}> ();

    // 사용자 데이터 가져오기 | get 요청 보내는 swr
    const {data : userData, error , mutate:revalidateUser} = useSWR<IUser | false>(
        '/api/users' ,
        fetcher, 
        {
            dedupingInterval : 2000 // 2초
        })
        // ⭐⭐ 구조분해할당 변수이름 변경 | 받아온 것 개명하기 
            // data : 1차적으로 받아온 데이터의 변수 
            // userData : data 에 받아온 변수 이름을 변경 ⭐⭐ 
            // CF. import 에서는 import Menu as abc from '@components/Menu' 이렇게 변경할 수 있음. 

        // useSWR<IUser> 이렇게 IUser 타입으로 정해주면 -> userData 의 타입이 IUser 가 됨 
        // useSWR<IUser | false> : 로그인 안 된 경우엔, false 로! 

    // 채널 데이터를 서버로 부터 받아온다. | createChannelModal 에서 받아온 데이터를 여기에서 재활용.
    const {data : channelData} = useSWR<IChannel[]>(
        userData? `/api/workspaces/${workspace}/channels` : null, 
            // [해석]
                // userData 가 없으면 == 로그인은 안 했으면 -> null 로 간다. 
                // swr 이 '조건부 요청' 을 지원 ⭐⭐⭐⭐⭐  
                // so, 로그인 했을 때만 채널 가져오고, 로그인 안 되어있으면, 채널 안 가져온다. 
        fetcher)
        // console.log("채널데이터나오나?" , channelData) // 나옴 

    // 워크스페이스에 있는 멤버들 데이터.
        const { data: memberData } = useSWR<IUser[]>( 
            userData ? `/api/workspaces/${workspace}/members` : null,
            fetcher,
        );
        // [해석]
            // 이거 만들 때, inviteWorkspaceModal 에서 받아온 데이터를 여기에서 재활용⭐⭐⭐ 
            // 왜냐면, swr 이 데이터를 관리해주니까, 이 포인트를 잘 활용해야 함 ⭐⭐⭐ 

    
    // 소켓 연결해주기
    const [socket, disconnect] = useSocket(workspace)

    // useEffect( () => {
    //     socket.on('message')
    //     socket.emit()
    //     disconnect()
    // } , [])
        // hook 에서 리턴을 어떻게 할지는 내 마음대로 함! 
        // 정해져 있는게 아니라, 만들고 싶은대로 만들면 됨. 

    // 연결을 끊어줄 때 : workspace 가 바뀔 때 -> 기존 워그스페이스와 연결을 끊어줘야 함 
    useEffect( () => {
        return () => {
            disconnect()
        }
    } , [workspace , disconnect])
        // useEffect 밖에 있는 변수를 이렇게 넣어주는 경우가 있음. ⭐⭐⭐ 
        // useEffect 는 캐싱이 아니라, deps 가 바뀔 때, 안에 것을 실행하는 거니까. 
        // 내부 것 뿐 아니라, 외부 변수도 넣어야 할 수도 있다는 것
        // 여기까지 하면, 내가 로그인 했다는 걸 알려줌. 

    useEffect( () => {
        // 채널 리스트랑 아이디, 소켓이 존재하는 경우 
        if(channelData && userData && socket) {
            // 소켓이 undefined 일 수 있으니까, 확실히 있다고 보장해야 함. 
            console.log("@workspace index" , socket) // 로그인 보내기 전에 socket 객체 어떻게 생겼나 
            
            // api 문서에 있는대로 요청함 
            socket?.emit('login' , {id : userData.id, channels : channelData.map( (v) => v.id )})
            console.log("🐞🐞🐞" ,socket, userData, channelData)
        }
    } , [socket, channelData, userData])
        // 이 안에서 변화될 것 같은거, 주시해야 할거 같은거는 deps 에 적는다. 





    const onLogout = useCallback (() => {
        axios.post ('/api/users/logout' , 
        null,   // null 데이터를 보내서, 로그아웃 함. 
        {
            withCredentials : true  // 서버와 프론트간 쿠키 공유하려면 해줘야 함
        }).then( () => {
            // post 요청해서, logout 성공시 실행
            // mutate(false)
                // mutate 함수를 실행 -> line10 에서 data 에 들어있는 값이 false 로 바뀔 것 📛📛📛
                // 이렇게 swr 이 컴포넌트간 '전역 스토리지' 역할을 하게 됨 ⭐⭐⭐  
            // mutate -> revalidateUser 로 개명
            revalidateUser();
        } ).catch( (error) => {

        } )
    } , [])

    // [토글함수] 프로필 메뉴 나오게 하기 
    const onClickUserProfile = useCallback((e) => {
        e.stopPropagation();
        setShowUserMenu( (prev) => !prev );
            // [토글함수 특징]
                // 과거에 있는 값을 반전 해준다. 
    } , [])

    // 현재 화면에 떠 있는 모든 모달을 다 닫는 메서드
    const onCloseModal = useCallback( () => {
        setShowCreateWorkspaceModal(false)
        setShowCreateChannelModal(false);
        setShowInviteWorkspaceModal(false);
        setShowInviteChannelModal(false);
    } , [])


    // const onClickAddchannel = useCallback( () => {
    //     setShowCreateChannelModal(true)
    //         // onClickAddchannel 하면, 채널 만드는 모달 또 추가해줘야 겠죠⭐⭐⭐⭐⭐
    // } , [])


    const onCreateWorkspace = useCallback(
        (e) => {
            e.preventDefault();
            if (!newWorkspace || !(newWorkspace as string).trim()) {
                // [기능]
                    // 필수값들 다 들어있는지 검사 
                // [검사 시 필수 항목]
                    // trim 넣어야, 띄어쓰기 하는 거, 막을 수 있음. 
            return;
            }

            if (!newUrl || !(newUrl as string).trim()) {return;}

            axios.post('/api/workspaces', {
                // 여기 localhost://3090 으로 하면 안 보내짐😥
                workspace: newWorkspace,
                url: newUrl,
            }, {
                withCredentials : true,
                    // 이게 있어야, 내가 로그인 된 상태라는 걸, 서버에게 쿠키를 전달해서, 알 수 있음. 
            })
            .then(() => {
                // [form 태그 처리]
                    // form 태그 처리할 때, 완료되고 나서 input 창들 다 비워주기 
                    revalidateUser();
                    setShowCreateWorkspaceModal(false);
                    setNewWorkspace('');
                    setNewUrl('');
            })
            .catch((error) => {
                // 개발자가 자기가 보게 콘솔 보기
                    console.dir(error);

                // 사용자 에게 에러처리 해주기
                    // 에러가 났을 때, 사용자에게, '에러입니다.' 라고 푝! 튀어나오면서, 알려주는 것 ⭐⭐⭐ 
                    toast.error(error.response?.data, { position: 'bottom-center' });
                        // bottom-center 니까, 아래에서, 튝, 올라오도록
            });
        },
        [newWorkspace, newUrl],
        );

    // 워크스페이스 만드는 함수 
    const onClickCreateWorkspace = useCallback( () => {
        setShowCreateWorkspaceModal(true)
    } ,[] )


    // [주의!]
        // return 문 아래에서 사용하면 안 돼!
        const toggleWorkspaceModal = useCallback( () => {
            setShowWorkspaceModal( (prev) => !prev );
        } , [])


        const onClickAddChannel = useCallback( () => {
            setShowCreateChannelModal(true)

            // hapse 누르고 -> 채널 생성하면 -> 사라지게 하기 | 내가 만들었음
            setShowWorkspaceModal(false)
        } , []); 
    

        const onClickInviteWorkspace = useCallback( () => {
            setShowInviteWorkspaceModal(true)
        } , [])



    // 로그아웃 버튼 눌러서 -> 로그인 data 가 false 이면 -> 다시 로그인 창으로 가게 하기 
    if(!userData) {
        return (
            <Redirect to='/login' /> 
            )
        }
        // [시사점] 현재, swr 이 전역적으로 데이터를 관리해주고 있는 것 임! ⭐




        
    return (
        <div>
            <Header> 
                <RightMenu>
                    <span onClick={onClickUserProfile} > 
                        <ProfileImg src={gravatar.url(userData.email, {s:'28px' , d : 'robohash'})} alt={userData.email} />
                        { showUserMenu && 
                            <Menu style={{ right : 0, top : 38 }} show={showUserMenu} onCloseModal = {onClickUserProfile} > 
                                <ProfileModal>
                                    <img src={gravatar.url(userData.email, {s:'36px' , d : 'robohash'})} alt={userData.email}  />
                                    <div>
                                        <span id='profile-name' > {userData.nickname} </span>
                                        <span id='profile-name' > Active  </span>
                                    </div>
                                </ProfileModal>
                                <LogOutButton onClick={onLogout} > 로그아웃 </LogOutButton>

                            </Menu>}
                            {/* ⭐⭐ 토글 함수에서, 이렇게, 조건부 렌더링 하는 것도 깔끔 */}
                    </span>
                </RightMenu>
                
            </Header>

            <WorkspaceWrapper>
                {/* 제일 왼쪽 부분 | 다양한 아이콘들이 들어오게 됨 |  */}
                
                <Workspaces> 

                    {/* IUser 안에 Workspaces 도 들어있어서, 문제를 해결할 수 있음  */}
                    {userData &&
            userData?.Workspaces?.map((ws) => {
              console.log('userData?.Workspaces.map((ws) ');
              console.log(ws);
              return (
                <Link key={ws.id} to={`/workspace/${123}/channel/일반`}>
                  <WorkspaceButton> {ws.name.slice(0, 1).toUpperCase()} </WorkspaceButton>
                </Link>
              );
            })}
                    
                    {/* 워크 스페이스 추가 하기  */}
                    <AddButton onClick={onClickCreateWorkspace} > + </AddButton>

                </Workspaces>
                
                {/* 두 번째 왼쪽 부분 */}
                <Channels>  
                    <WorkspaceName onClick={toggleWorkspaceModal} > hapse </WorkspaceName>
                    
                    <MenuScroll> 
                        
                        <Menu show={showWorkspaceModal} onCloseModal={toggleWorkspaceModal} style={ {top : 95 , left : 80} }>
                        {/* onClose 할 때는 이벤트 버블링 조심⭐⭐⭐  */}
                        {/* 같은 메뉴인데, 스타일이 조금 다르면, props 를 넣어서 조절 가능 */}

                            <WorkspaceModal>
                                <h2>hapse</h2>

                                <button onClick={onClickAddChannel}> 채널 만들기 </button>
                                <button onClick={onLogout}> 로그아웃 </button>

                            </WorkspaceModal>

                        </Menu>

                        <ChannelList />
                        <DMList  />
                            {/* <ChannelList userData = {userData} /> 
                                예전 코드에서는, 이렇게, props 로 전달했는데, 
                                지금은 swr 을 사용하기 때문에 필요 없음.
                                */}

                    </MenuScroll>
                </Channels>

                {/* 가운데 채팅 부분 : 클릭에 따라 변화되는 부분*/}
                <Chats>
                    <Switch>
                        <Route path="/workspace/:workspace/channel/:channel" component={Channel} /> 
                            {/* channel 이 들어올 수 있게 라우트 파라미터 만들어주기 */}
                        <Route path="/workspace/:workspace/dm/:id" component={DirectMessage} /> 
                            {/* 사용자의 id 가 들어올 수 있게 id 만들어주기 */}
                            
                    </Switch>
                </Chats>
            </WorkspaceWrapper>
            
            <Modal show={showCreateWorkspaceModal} onCloseModal={onCloseModal} >
                    <form onSubmit={onCreateWorkspace}> 

                        {/* 워크스페이스에 뜰 이름 */}
                        <Label id="workspace-label">
                            <span>워크스페이스</span>
                            <Input id='workspace' value={newWorkspace} onChange={onChangeNewWorkspace} />   
                            {/* <Input>  </Input> 이렇게 하게 되면, 안 됨.
                                왜냐면, ts 에서 input 은 void 요소 이기 때문에, 다른 요소, 텍스트 넣을 수 없음.
                            */}
                            
                        </Label>

                        {/* 주소창에 뜰 이름 */}
                        <Label id="workspace-url-label">
                            <span>워크스페이스</span>
                            <Input id='workspace' value={newUrl} onChange={onChangeNewUrl}  />  
                        </Label>

                        <Button type='submit' > 생성하기 </Button>

                    </form>
            </Modal>

            {/* 인풋이 있는 컴포넌트니까, 따로 분리하기 ⭐⭐ */}
                <CreateChannelModal 
                show={showCreateChannelModal} 
                onCloseModal={onCloseModal} 
                setShowCreateChannelModal = {setShowCreateChannelModal}
                />

            <InviteWorkspaceModal 
                show={showInviteWorkspaceModal} 
                onCloseModal={onCloseModal} 
                setShowInviteWorkspaceModal={setShowInviteWorkspaceModal} /> 
            
            <InviteChannelModal 
                show={showInviteChannelModal} 
                onCloseModal={onCloseModal} 
                setShowInviteChannelModal={setShowInviteChannelModal} /> 


            {/* 이거 이제 안쓰게 되어서 주석 처리 */}
            {/* {children}  */}
                {/* [해석]
                    '자리를 맡아놓는' 느낌. ⭐⭐⭐ 
                    즉, 다른 태그들이 props 를 통해 타고 들어 와서, 이 자리를 채울 것 임. 
                */}




        </div>
    )
}
export default Workspace