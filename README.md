# Nodejs 책리뷰사이트 팀프로젝트

### https://github.com/zam0ng/node-PJ.git

## 20230602

- 작가로 등록된 사람은 자신의 책을 올릴수 있고 독자들은 책에 대한 리뷰를 작성할 수 있는 사이트를 구현하기로함
- 그 중 상세페이지와 실시간 채팅 기능에 대한 구현부분을 맡음

### 금일 작업 내용

- users, books, review, r_review 테이블 생성 및 조인 sequelize js 파일 생성 후 배포

## 20230604

- chat 테이블 생성 js 작성 및 테스트 쿼리 작성

### 추후 추가 사항

- 테이블 생성 후 테스트 진행 결과 특정 유저와 어드민의 대화를 특정유저의 채팅 시간 정보를 이용하여 가져오지만 다른 유저의 대화가 사이에 껴있으면 다른 유저에 대한 어드민에 답변도 가져와 지는 현상발견
- user_name, text 컬럼 뿐만이 아닌 별도의 컬럼이 필요

## 20230605

- books 테이블 조회수 탑 5 리스트를 가져오기 위해 viewcnt 컬럼 추가
- users 테이블 컬럼 중 check 컬럼이 예약되있는 언어 이기 때문에 checks로 컬럼명 변경
- 메인 페이지 조회수 탑 5 리스트 및 별점 탑 5 리스트 정보를 가져오는 메인 페이지 구현 완료

## 20230606

- 나작작 프로젝트에 사용할 실시간 채팅 기능 관련 socket.io 개인 공부 실시
- mysql 쿼리를 sequelize로 바꾸는데 어려움이 있어 sequelize 문법에 대한 개인 공부 실시
