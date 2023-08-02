


import { Dispatch, SetStateAction, useCallback , useState } from "react";



type Handler = (e : any) => void
type ReturnTypes<T = any> = [T , Handler, Dispatch<SetStateAction<T>>];

const useInput =  <T = any> (initialData : T): ReturnTypes<T> => {
  // 타입스크립트의 변수 타입 설정 
    // 제너릭 : <T> : T  
    // 뭐가 들어올지 모를 때 사용 
    // 기본값으로 any 를 줬음. 

  const [value , setValue] = useState(initialData);
  
  const handler = useCallback( (e) => {
    setValue(e.target.value)
  } , []);

  return [value , handler , setValue];
    // useState 랑 useCallback 을 합쳐서, 한방에 리턴 해줌⭐⭐
};

export default useInput