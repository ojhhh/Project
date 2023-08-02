import React from 'react';

import loadable from '@loadable/component';
  // [loadable 설명]
    // 코드 스플리팅 중 하나의 라이브러리 
    // 코드 스플리팅 은 필요한 컴포넌트만 가져오는 개념 
    // 이렇게 하면, login 할 때, signup 컴포넌트는 안 가져오게 됨 
    // 성능 개선에 도움 / 알아서 해줌 

// 페이지들은 코드스플리팅 해서 가져오기
const Login = loadable( () => import ('@pages/Login') )
const SignUp = loadable( () => import ('@pages/SignUp') )
const Workspace = loadable( () => import ('@layouts/Workspace/index') )
  // [경로에 @ 사용한 것] 
    // webpack.config.ts > alias 설정을 해서 > @pages 로 접근할 수 있는 것 임 ⭐ 
    // 이게 아니면 '../pages/Login 으로 접근 해야 함

import { Redirect, Route , Switch } from 'react-router';


const App = () => {
  return (
    <Switch>
      <Redirect exact path='/' to='/login'  />
        {/* 주소가 '/' 로 끝나면 -> /login 경로로 옮겨줌 */}
      <Route path="/login" component={Login} /> 
      <Route path="/signup" component={SignUp} /> 
        {/* nested router 위해, 기본 경로 잡아줌 */}

      <Route path="/workspace/:workspace" component={Workspace} /> 
        {/* 파라미터 라우터를 쓰면 /workspace/:이렇게 아무거나 들어갈 수 있음. */}
        {/* [주의👐] 파라미터를 사용한 라우트의 경우, 순서가 가장 밑으로 와야함!  */}

      
    </Switch>
      // [Switch 기능]
        // 여러개의 라우터중 딱 하나만! 작동하게 함 
        // ex) Redirect 가 되면 -> login 라우터, signup 라우터가 안 됨



  )
  
  
};

export default App;
