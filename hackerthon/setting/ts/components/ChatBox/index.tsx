import React, { VFC, useCallback, useEffect, useRef } from 'react'
import { ChatArea, Form, MentionsTextarea, SendButton, Toolbox } from './styles'
import { text } from 'stream/consumers';
import autosize from 'autosize';


interface Props {

    // 부모가 채팅 submit, 채팅 하는 것들 관리
    // 채팅 submit 하는 것
    onSubmitForm : (e: any) => void

    chat? : string;

    // 채팅 하는 것 
    onChangeChat : (e: any) => void

    // 응? 이게 뭐지? 👇👇👇 
    placeholder? : string
}

const ChatBox: VFC<Props> = ({chat , onSubmitForm, onChangeChat , placeholder}) => {
    
    // useRef 는 '태그' 에 '직접 접근' 하고 싶을 때, 사용한다. 
    const textareaRef = useRef <HTMLTextAreaElement> (null)
        // 여기에서는, 'ref = {textareaRef}' 이렇게 해서, 우선, 직접 접근, 하고 있다. 
        // 즉, state 로 관리하는게 아니라, 직접 태그에 접근하고 싶을 때 Ref 사용 
        // <HTMLTextAreaElement> (null) 이건 타입 스크립트할 때 적용하는 것들
    
    // input 창이 자동으로 길어지는, auto size 적용하기 
        useEffect ( () => {
            if(textareaRef.current) {
                // 만약, ref 가 있으면 -> auto size 해준다. 
                autosize(textareaRef.current);
            }
        } , [])



    // 내가 어떤 키를 눌렀는지 알 수 있음 ⭐⭐⭐ 
    const onKeyDownChat = useCallback( 
        (e) => {
            console.log(e)
        
            if (e.key === 'Enter') {
                if(!e.shiftKey) {
                    e.preventDefault();
                    console.log( "엔터누르고 찍히나🐞 @ChatBox index " ,e)
                    
                    // 이걸로 보내는 건가? ⭐⭐ 
                    onSubmitForm(e)
                }
            }
    } , [onSubmitForm])
    
return (
    <ChatArea>
        <Form onSubmit={onSubmitForm}>
            <MentionsTextarea
                id = "editor-chat"
                value = {chat}
                onChange={onChangeChat}
                onKeyDown={onKeyDownChat}
                placeholder={placeholder}
                ref = {textareaRef}
            >
                <textarea  value={chat} onChange={onChangeChat}  onKeyDown={onKeyDownChat} />
                {/* 항상 value 와 onchange 는 같이 써야 함 ⭐ */}
                {/* onKeyDownChat : 눌렀을 때, 실행되는 것들 */}

                
            </MentionsTextarea>
            <Toolbox>
                <SendButton  
                    className={
                    'c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send' +
                    (chat?.trim() ? '' : ' c-texty_input__button--disabled')
                    }
                    data-qa="texty_send_button"
                    aria-label="Send message"
                    data-sk="tooltip_parent"
                    type="submit"
                    disabled={!chat?.trim()}
                > 
                    <i className="c-icon c-icon--paperplane-filled" aria-hidden="true" />
                </SendButton>

            </Toolbox>
        </Form>
    </ChatArea>
    
  )
}

export default ChatBox