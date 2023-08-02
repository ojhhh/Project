import React, { useCallback } from 'react'
import { Container , Header } from '@pages/DirectMessage/styles'
import fetcher from '@utils/fetcher';
import useSWR from 'swr'
import gravatar from 'gravatar';
import { useParams } from 'react-router';
import ChatBox from '@components/ChatBox';
import useInput from '@hooks/useInput';
import ChatList from '@components/ChatList';
import axios from 'axios';
import { IDM } from '@typings/db';
import BoardItem from '@components/BoardItem';

const DirectMessage = () => {
  // wordkspace, id 는 url 주소에서 params 에 담긴것 가져온다. 
  const { workspace , id } = useParams <{workspace : string, id : string}> ();

  // 유저정보 ex) 유저들 프로필 이미지가 바뀜. 
  const {data : userData} = useSWR(`/api/workspaces/${workspace}/users/${id}`, fetcher)
  
  // 내 정보 | 이게 있어야, 누가 누구한테 보내는지 적을 수 있음. 
  const {data : myData} = useSWR('/api/users', fetcher)

  // chat 을 chatBox 에서 관리하는게 아니라 부모가 관리함 
  const [chat, onChangeChat, setChat] = useInput('');
    // 이 시사점을 잘 이해해야 함 ⭐⭐
    // 그러면, 부모가 누구지? 

  // 등록된 채팅 데이터 받아오기
    const { data: chatData, mutate: mutateChat , mutate} = useSWR<IDM[]>(
      `/api/workspaces/${workspace}/dms/${id}/chats?perPage=20&page=1`,
      fetcher,
    );

  // hooks 는 return 보다 올려서!
  const onSubmitForm = useCallback ((e) => {
    console.log(chat)
    console.log('@pages>DirectMessage | chat 가는지 확인 | ' , chat)

    // 만약, chat 이 실제로 존재한다면 => 서버에게 보내기(채팅 등록하기)
    if(chat?.trim()) {
      // dm 보내는 api
      axios.post(`/api/workspaces/${workspace}/dms/${id}/chats` , {
        // workspace 중 00workspace 에, 00id 를 가진 사람에게, chat 을 보내라 
        content : chat,
      })
      .then( ()=> {
        // 채팅이 등록되면 -> 등록된걸 포함해서 채팅 받아오기 
        mutate();
        // 등록이 되면, 채팅창에 등록되어 있는 글자 지우기
        setChat('')

      } )
      .catch(console.error) 

    }

    e.preventDefault();

  } , [])

  // userData 값이 없으면 1) 로딩중 2) 에러 임. 
  if (!userData){
    // 로딩중, 에러면, 화면 띄우지 않기
    return null
  }

  return (
    <Container> 
      <Header>

      <img src={gravatar.url(userData.email, { s: '24px', d: 'retro' })} alt={userData.nickname} />
        <span>{userData.nickname}</span>
        
        
      </Header>

        {/* <BoardItem /> */}
        {/* <ChatList /> */}
        <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />

    </Container>
  )
}

export default DirectMessage