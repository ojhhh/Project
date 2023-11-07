# 부동산 STO (기업협약 프로젝트)

- figma : https://www.figma.com/file/aBMZ7hFxCcddiVapcRQxbY/bounceCode_STO%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=1%3A2&mode=design&t=zW7U2zUvKLzE1cEA-1
- ERD : https://dbdiagram.io/d/6541ab467d8bbd64653cf50b

### 2023/11/06

- 바운스코드 로그인 api 테스트 하는 중 (실패) : 기업에서 제공해준 가이드를 따라했고 요청이 정상적으로 처리 됬다고 나왔지만 data가 null이 넘어 오는 상태여서 업체에 문의 하였고 확인 후 연락 준다고 통보받음
- 인증 관련 설정 테스트를 위해 https 서버 배포

### 2023/11/07

- 데이터베이스 users 테이블 blacklist 컬럼추가, vote 테이블 매물 이름, 발행 총량 컬럼 추가
- 테이블 컬럼명 수정 real_states_id -> real_state_id
- 어드민 메인, 등록 페이지 관련 api 명세서 작업 진행
- 어드민 메인 페이지 백엔드 작업(controller) 후 더미데이터 작성 중 메인페이지 재설계 요청하여 중단
