
// 커스텀 훅은 일단 보류
    // import useInput from '@hooks/useInput'

import axios from 'axios'
import React, { useCallback, useState } from 'react'

import {Form , Error, Success, Label, Input , LinkContainer , Button , Header } from './style'
    // [이모션 (css in js 중 하나) 가져오기]
        // 이렇게 가져오면 -> 1) Form 태그도 되면서 2) 이미 css 가 적용되는 것 

import { Link , Redirect } from 'react-router-dom'
import fetcher from '@utils/fetcher'
import useSWR , {mutate} from 'swr';



const SignUp = () => {

    // get 요청 보내는 swr
    const {data, error , mutate} = useSWR('/api/users' , fetcher)
        // [해석] 로그인 되어 있을 때, 다시 회원가입 누르면 => 채널 페이지로 이동하게 하기 



    // 커스텀 훅 에서 만든 메소드를 사용하는 경우
    const [email, setEmail] = useState('')
    const [nickname , setNickname] = useState('')
    
    // 커스텀 훅 에서 만든 메소드를 사용하지 않는 경우
        // onChangePassword, onChangePasswordCheck 를 사용함  
    const [password , setPassword] = useState('')     // // 여기에서는 자리만 그냥 놔둠
    const [passwordCheck , setPasswordCheck] = useState('')

    // 비밀번호랑 확인용 비번이랑 같은지 확인
    const [mismatchError, setMisMatchError] = useState(false)

    // 회원가입 요청 시 에러가 났을 경우 
    const [signUpError , setSignUpError] = useState('')
        
    // 회원가입 성공 시, 메시지 보여주기 
    const [signUpSuccess , setSignUpSuccess] = useState(false)

    
    const onChangeEmail = useCallback( (e) => {
        setEmail (e.target.value);
    } , [] )
    

    const onChangeNickname = useCallback( (e) => {
        setNickname(e.target.value)
    } , [] )


    const onChangePassword = useCallback( (e) => {
        setPassword(e.target.value);    
        // 비밀번호가 일치하는지 확인
            // 불일치 하면 -> 경고문 띄우기 
        setMisMatchError(passwordCheck !== e.target.value); 
    } , [passwordCheck, setPassword] )
        // onChangePassword 함수 기준으로 '외부 변수' 라면, [ ] 이 안에 써준다. 
        // 그러면 어떤걸 [ ] 안에 쓰고, 안 쓰나? 
            // 1) '바뀌지 않는다는게 보장' 되어 있으면, '안 쓴다'.
                // ex) setMisMatchError 이런 함수들은, '안 바 뀐다.' 라고 공식문서에 나와있음. 

    const onChangePasswordCheck = useCallback( (e) => {
        setPasswordCheck(e.target.value)
        setMisMatchError(e.target.value !== password)
    } , [password] )


    const onSubmit = useCallback( (e) => {
        e.preventDefault();
            // 싱글페이지 어플리케이션이니까, 항상, e.preventDefault(); 이렇게 해줘야 함. 
        console.log(email , nickname , password , passwordCheck);

        // 비밀번호 1&2차 미스매치가 없을 때, 회원가입하기 
        if(!mismatchError && nickname) {
            console.log("서버로 회원 가입하기")

        // [비동기 요청 단계 1 : 로딩 단계]
            // 회원 가입 요청시 에러 받기 전, 초기화 하기
            setSignUpError('')

            // 회원가입 요청 전, 초기화
                // 첫번째 요청이 두 번째 요청에 영향을 미치지 않게 하기 위해서 
            setSignUpSuccess(false)

            axios.post('/api/users' , {
                email, 
                nickname, 
                password
            })
            // [비동기 요청 단계 2 : 성공 단계]
                .then((response) => {
                    console.log(response)
                    
                    setSignUpSuccess(true)
                }) 
            // [비동기 요청 단계 3 : 실패 단계] 
                .catch((error) => {
                    console.log("서버에서 보낸 에러 : " , error.response) 
                    // 정확한 에러는 error.response 에!

                    setSignUpError(error.response.data)
                })
                // 성공, 실패건 무조건 실행됨.
                .finally(() => {})  
        }

    } , [email, nickname, password, passwordCheck , mismatchError] )
        // [알아야 할 것] useCallback 을 써야 성능 최적화가 됨 
            // 즉, useCallback 으로 감싸지 않으면, SignUp 함수가 재실행 될 때 마다, 그 하위 요소들인 setNickname 등이 재생성됨. 
            // 감싸면 -> 콜백함수에 변화가 있을 때만, 실행됨.
            // 안 감싸도 작동은 하는데, '디버깅' 이 어려움. (왜냐면, 매번 새로운 함수가 들어가게 되는 거라서.)

        // [해석]
            // 'email, nickname, password, passwordCheck' 


    // 로그인 된 사용자가 넘어갈 때, 화면이 거슬리는 거 방지 위한 로딩중 화면 
        if (data === undefined) {
            return <div> 로딩중🐣 | 여기에 로딩중 화면 꾸밀 수 있음. </div>
        }


    // 로그인 성공하면 -> channel 로 가게 하기 
        console.log("로그인 데이터 들어오나? @Login index.tsx" , data)
        if(data) {
            return <Redirect to="/workspace/hapse/channel/일반" />
        }
            // [주의할 것⭐]
                // return 을 넣을 때는, hooks 다음에 넣어줘야 함
                // 저 위로 가면 안 돼! 

    return (
        <div>
            <div id="container">
            <Header>hapse</Header>
                
            <Form onSubmit={onSubmit}>
                <Label id="email-label">
                <span>이메일 주소</span>
                <div>
                    <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
                </div>
                </Label>
                <Label id="nickname-label">
                <span>닉네임</span>
                <div>
                    <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
                </div>
                </Label>
                <Label id="password-label">
                <span>비밀번호</span>
                <div>
                    <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
                </div>
                </Label>
                <Label id="password-check-label">
                <span>비밀번호 확인</span>
                <div>
                    <Input
                    type="password"
                    id="password-check"
                    name="password-check"
                    value={passwordCheck}
                    onChange={onChangePasswordCheck}
                    />
                </div>
                
                {/* 비밀번호 미스매치 발생 하면 -> Error 발생시켜주기 */}
                {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
                
                {!nickname && <Error>닉네임을 입력해주세요.</Error>}
                {signUpError && <Error>{signUpError}</Error>}
                {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}

                </Label>
                <Button type="submit">회원가입</Button>
            </Form>
            <LinkContainer>
                이미 회원이신가요?&nbsp;
                <Link to="/login">로그인 하러가기</Link>
                    {/* a href 하면, 화면이 새로고침 됨 
                        link to 하면, 새로고침 없이, 화면만, 싹! 바꿔줌!

                    */}
            </LinkContainer>
            </div>
        </div>
    )
    }

    export default SignUp