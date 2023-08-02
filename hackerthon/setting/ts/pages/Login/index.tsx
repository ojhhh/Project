
// import useInput from '@hooks/useInput';
import { Button, Error, Form, Header, Input, Label, LinkContainer } from '@pages/Login/style';
// import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Link , Redirect } from 'react-router-dom';

// import useSWR from 'swr';
import useSWR , {mutate} from 'swr';
import fetcher from '@utils/fetcher';


const LogIn = () => {

  // get 요청 보내는 swr
  const {data, error , mutate} = useSWR('/api/users' , fetcher , {
    // [해석] 
      // data 또는 error 가 변경되면 -> 리액트는 자동적으로 리렌더링 한다 -> 그래서 Redirect 에서 true 일때로 넘어가게 된다.

    // 주기적으로 호출되는 것 막아주는 설정 
    dedupingInterval : 100000,  // 100초 
      // 100000 : 100초 마다 한번만 호출
      // 이 100초 동안 아무리 많이 보내도, 처음에 보낸 정보를 기억하고 있다가 그걸 가져다 씀. 
      // 캐시 유지기간이라고 보면 됨
      // 즉, 이 100초 동안은 캐시된 데이터를 쓰는 것 임

  })
    // useSwr 첫 번째 인자 : fetcher 에게 주소를 전달해주는 역할만 함. 
    // useSwr 두 번째 인자 : fetcher 함수. 전달받은 주소를 처리해주는 곳. 첫번째 인자가 매개변수로 넘어오는데 생략해서 표시함
    // {data} 는 fetcher 함수에서 then 으로 return 받아온 값
    // data가 없으면 -> 로딩중! 을 의미함.  
    // {error} 는 axios 요청시, error 내용을 담아줌 


  const [logInError, setLogInError] = useState(false);
  const [email, setChangeEmail] = useState('');
  const [password, setChangePassword] = useState('');


  const onChangeEmail = useCallback( (e) => {
      setChangeEmail(e.target.value)
  } , [])
  
  const onChangePassword = useCallback( (e) => {
    setChangePassword(e.target.value)
  } , [])


  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post(
          '/api/users/login',
          {email, password}, 
          {withCredentials : true}  
            // [해석] 서버와 포트가 동일하면, 쿠키를 못 받아오는데, 이걸 받아오기 위해서, withCredentials 설정 
        )
        .then((response) => {
          // 내가 원하는 타이밍에 swr 보내는 법
          // mutate();
            // revalidate 애초에는 이걸 했는데 오류가 나서 -> mutate() 로 변경 ⭐
            // [해석]
              // 1. 로그인 성공했을 때, revalidate 호출하면, -> revalidate() 실행시키고 
              // 2. 그 다음 실행시키고 싶은 swr 에 revalidate 를 넣어주면 -> post 요청 다음 get 요청 보내게 된다.
        
        mutate(response.data , false)
          // [해석]
            // 위에 처럼 했어도 되었지만, 좀 더 정확하게 사용
            // 이렇게 하면, 서버에 요청을 보내서 데이터를 받아오는게 아니라, 
            // 이미 response 로 받아온 data 를 line 17 에 있는 data 에 넣어서 사용할 수 있음. 

              // 두 번째 인자의 기능 
                // mutate(response.data , true) : shouldRevailidate : 기본값은 true, 
                // mutate(response.data , false) : false 로 하면, 서버 검사 자체도 안 함이걸 넣어야 요청이 정말로 안 감 ⭐⭐⭐ 
        
        })
        .catch((error) => {
          console.dir(error);
          setLogInError(error.response?.status === 401);
        });
    },
    [email, password],
  );

  // 로그인 된 사용자가 넘어갈 때, 화면이 거슬리는 거 방지 위한 로딩중 화면 
    if (data === undefined) {
      return <div> 로딩중🐣 | 여기에 로딩중 화면 꾸밀 수 있음. </div>
    }

  // 로그인 성공하면 -> channel 로 가게 하기 
    console.log("로그인 데이터 들어오나? @Login index.tsx" , data)
    if(data) {
      return <Redirect to="/workspace/hapse/channel/일반" />
        // 로그인 했을 때, 이제 채널 일반으로 가게 함
    }

  return (
    <div id="container">
      <Header>HAPSE</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default LogIn