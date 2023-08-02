
import React, { useCallback } from 'react'
import { Container , Header} from './style'
import ChatList from '@components/ChatList'
import ChatBox from '@components/ChatBox'
import useInput from '@hooks/useInput'
import { Route, Switch } from 'react-router'
import StudyRoom from '@components/StudyRoom'
import StudyNote from '@components/StudyNote'
import TempBoard from '@components/TempBoard/TempBoard'
import ChennelHome from '@components/ChannelHome/ChennelHome'

const Channel = () => {
  const [chat, onChangeChat , setChat] = useInput('');
  const onSubmitForm = useCallback( (e) => {
    e.preventDefault();
    console.log('@pages>channel | 채널에서 메시지 보냄  submit!!!')
    setChat('') // 여기까지 쓰니까, 채팅 할 때 보내기가 되었음! 주의! ⭐
  } , [])

  return (

        <Container>
          <Header> 채널 </Header>

          <Switch>
            <Route path={"/workspace/hapse/channel/공부방"} component={StudyRoom} />             
            <Route path={"/workspace/hapse/channel/자유게시판"} component={TempBoard} />             
            <Route path={"/workspace/hapse/channel/학습일지"} component={StudyNote} />             
            <Route path={"/workspace/hapse/channel/일반"} component={ChennelHome} />             
            
            {/* 원본 유지 */}
            {/* <ChatList />  */}
          </Switch>


        </Container>
        
  )
}

export default Channel