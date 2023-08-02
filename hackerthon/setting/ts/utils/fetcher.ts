
import axios from "axios";

const fetcher = (url : string) => 
    // 매개변수로 받은 url 로 get 요청 보내기 
    axios.get(url , {
        withCredentials : true      
            // [해석] 서버 포트가 다르면 -> 쿠키 값이 전달이 안 됨. 
            // 이를 해결하기 위해 withCredentials true 설정 
    })
    .then((response) => {
        // 👇👇 이 response.data 데이터가 index.tsx 에서
            // const {data}  = useSWR('http://localhost:3095/api/users' , fetcher) 여기에서의 {data} 로 받아짐
        return(response.data)
            // [디버깅] 
                // 이 부분은 return 이 없었는데, 안 넣으니까 Redirect 가 안 되었음.⭐⭐ 
                // 이건 강사님 github 과 다름! 주의!
                // 왜 다르냐면, 제로초님 코드에는 revalidate 가 되어 있었는데, 이게, mutate 로 넘어가게 되어서 다른 것 같음 
                // 결론은 mutate 를 하면, 강사님 코드와 다르게, 이 부분에 return 써야 함

    })

export default fetcher