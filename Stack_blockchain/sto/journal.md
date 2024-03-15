### 2023/11/06

- 바운스코드 로그인 api 테스트 하는 중 (실패) : 기업에서 제공해준 가이드를 따라했고 요청이 정상적으로 처리 됬다고 나왔지만 data가 null이 넘어 오는 상태여서 업체에 문의 하였고 확인 후 연락 준다고 통보받음
- 인증 관련 설정 테스트를 위해 https 서버 배포

### 2023/11/07

- 데이터베이스 users 테이블 blacklist 컬럼추가, vote 테이블 매물 이름, 발행 총량 컬럼 추가
- 테이블 컬럼명 수정 real_states_id -> real_state_id
- 어드민 메인, 등록 페이지 관련 api 명세서 작업 진행
- 어드민 메인 페이지 백엔드 작업(controller) 후 더미데이터 작성 중 메인페이지 재설계 요청하여 중단

### 2023/11/08

- 어드민 메인 페이지 레이아웃 변경 작업으로 인한 api 명세서 재작업 및 백엔드 작업 진행 중
- 업체 컨펌 후 작업 순위 변경에 따른 회의 진행 하였고 우선 순위가 토큰 발행 및 유통에 포커스가 맞춰짐
- 어드민 메인페이지 백엔드 작업 완료 후 청약 페이지 바로 시작할 예정
- 새로운 didtoken 발급 가이드를 받았지만 또 안됨

### 2023/11/09

- 어드민 메인 페이지 전체 매물 및 거래량 가져오는 백엔드 작업 중 (타입때매 다터지는 중)
- 업체 측에서 알려준 방법으로 사용자 wallet 주소 가져오기 완료 react 18, web3 4.2.2 동작 확인
- 데이터베이스 Trades, Orders 테이블 조인 해제 및 테스트용 더미 데이터 작업 진행

### 2023/11/10

- 어드민 메인 페이지 매물정보, 공모현황, 이용자 수, 블랙리스트, 최근 거래내역, 매물별 거래량 차트 (일별, 주간별, 월별) 백엔드 작업완료
- 매물별 거래량 (주간, 월간) 데이터는 가공 중

### 2023/11/11

- 어드민 메인 페이지 매물별 거래량 (주간, 월간) 데이터 가공 완료
- 청약 메인 페이지 청약 목록 가져오는 백엔드 기능 구현 완료
- 청약 상세 페이지 및 청약 버튼 백엔드 기능 구현 완료

### 2023/11/12

- 마이페이지 백엔드 작업관련 api 명세서 정리
- 토큰 내/외부 전송 관련 컨트랙트 작성 공부 및 정리

### 2023/11/13

- 마이페이지 내 정보 불러오기, 입금 기능, 출금 기능, 구현 완료
- 배당금 지금 관련 테이블 추가(지급일 기준 토큰을 보유하고 있는 사람에게 배당금을 지급해야하기 때문에 이력이 남아야함)
- 마이페이지 입출금 거래 내역에 애매한 부분이 있어 현재 보류로 두고 총 자산 부분 작업 진행 중

### 2023/11/14

- 마이페이지 총 자산 보기, 매물별 자산 정보 보여주는 기능 구현완료
- 마이페이지 작업중 배당금 부분관련하여 애매한 부분 발생하여 협의하였고 dividends 테이블에 status 컬럼을 추가하여 배당금 지급 전 후를 표시하는 방법을 선택하였고 표출되는 데이터가 달라져서 api 명세서 작업 진행

### 2023/11/15

- 마이페이지 투표 관련 백엔드 작업 중 블록체인으로 하기로 하여 투표 관련 부분 보류
- 마이페이지 내 청약 목록 보여주는 기능 완료하여 마이페이지 백엔드 기능 구현완료

### 2023/11/16

- 마이페이지 총 자산 및 종목별 자산 내역 관련 계산 방식 변경으로 인한 재작업 진행 및 완료
- 청약 보여주는 페이지에 표출되는 데이터 추가(청약에 성공한 매물에 대한 현재가격 출력 및 짧은 설명 추가)
- 토큰 내/외부 전송관련 작업해야할 내용 정리 및 학습 (내부 지갑에서 외부 지갑으로 토큰을 전송하는건 감지하기 쉬운데 외부에서 내부로 들어올때 복잡한듯)

### 2023//11/17

- 토큰 내/외부 전송관련 web3.js를 통해 transaction 감지되는거 확인완료 이력을 남기는 방법은 계속 구상중
- 어드민 매물 관리 페이지에 받는 데이터가 달라져서 추가 작업 진행 (매물 관리 전체 리스트 보여주는 기능과 등록된 매물의 상세 정보를 볼 수 있는 기능 구현해달라해서 넘겨주는 데이터 가공 작업 진행)

### 2023/11/18

- 토큰 내/외부 전송관련 transactions를 감시하여 from, to, value를 추적하는건 성공했지만 어떤 토큰인지(symbol) 알지 못하는 상황 발생
- erc20 토큰에 transfer 부분에 이벤트를 추가하여 from, to, value, symbol을 띄우게 하여 transaction의 hash를 가져와 receipt 안에 logs를 확인 하는 식으로 구현
- ganache 환경으로 테스트 진행 중

### 2023/11/19

- 로그인 방법 구상 및 브런치 merge 작업 진행
- 현재 각각 브런치에 있는 자료가 너무 많이 바뀐 상태라 모여서 merge하는 작업이 필요할듯 보임

### 2023/11/20

- 로그인 관련하여 로그인 성공하면 access_token과 refresh_token이 쿠키로 올라가고 백엔드에 로그인이 필요한 요청이 발생하면 브라우저에 있는 access_token을 백엔드로 보냄
- 백엔드에서 access_token을 검사하고 유효하다면 작업을 처리하는 식의 로그인 기능 구현
- 최초로 로그인 했을때는 관련 정보를 데이터베이스에 저장하는 로직 구현 중

### 2023/11/21

- 로그인 관련 검증 방식 변경 및 마이페이지, 청약 하기 버튼, 매물 거래 관련 로그인 인증 방식 변경으로 인한 작업 진행
- 블록체인 관련 배포 작업 진행 예정이 였으나 컨트랙트가 배포되지 않아 테스트는 하지 못함

### 2023/11/22

- 컨트랙트 배포 관련 업체 측 네트워크에 배포가 되지 않는 현상 발생하여 업체에 문의하였고 업체에서 컨트랙트 직접 배포해보겟다는건지 코드 받아감
- sepolia나 ganache 등 테스트넷에서는 정상 배포 확인

### 2023/11/23

- BNC 네트워크 컨트랙트 배포 관련 업체 문의 결과 업체에선 잘된다고 하는데 우리쪽에선 배포가 되지 않음 계속 문의 해봤자 그쪽에선 된다하니 뭘 확인해달라고 하지 못하겟음
- 토큰 내/외부 전송 관련 로그 찍히는거까지 확인 찍힌 로그를 기반으로 데이터베이스에 저장하려고 하려던 찰나 누락되는 트랜잭션이 있다는걸 확인 동인한 블록에 트랜잭션이 발생하면 하나만 나오거나 아예 누락되는거 같아 수정중

### 2023/11/24

- sepolia 네트워크에서 배포한 토큰 정상적으로 데이터베이스 들어오는 작업 완료. 일단은 기능 구현부터 하자라는 생각으로 작업을 하다보니 코드가 많이 지저 분해져서 정리필요
- 걱정되는 부분은 현재 10초마다 setInterval이 돌면서 블록을 검사하는데 노트북에선 10초안에 작업이 끝나 다음 작업을 하는데 이상이 없지만 ec2 프리티어 버전에서 버텨질지 의문
- 안된다면 다른 방법을 생각해봐야 겠음
- 또 하나는 내/외부 토큰 전송 현황을 보여줄때 로직이 내부에서 나갔을때와 내부로 들어왔을때 인데 데이터베이스에서 찾아오는데 오래걸릴거 같다라는 느낌이 듬

### 2023/11/25

- 토큰 내/외부 전송 관련 데이터베이스에 저장하는데 저장된 데이터로 사용자가 몇개를 내보내고 받았는지 판단하기가 어려울거 같아 로직 변경 중
- 청약 완료됬을때 정보를 유저 이메일이 아닌 지갑주소를 받는거로 변경 하기로해서 데이터베이스 컬럼 변경
- 트랜잭션 저장하는 테이블에 내부전송인지 외부전송인지 표시하기위한 컬럼 추가

### 2023/11/26

- 토큰 내/외부 전송 관련 데이터베이스에 내부에서 외부로 나가는 토큰인지 외부에서 내부로 들어오는 토큰인지에 대한 구분 로직 추가하여 구현 완료
- 청약 완료 테이블 컬럼 바꿔서 order 테이블 다 터진듯

### 2023/11/27

- 토큰 내/외부 전송 관련 기존 symbol로 우리 토큰인지 아닌지를 검사했는데 생각해보니 겹칠 수 있는 경우가 많은거 같아 컨트랙트 주소를 검사하는 로직으로 변경
- 청약 할때 20% 이상 구매하지 못하게 하는 로직 추가
- 투표관련 vote_history, votes 테이블 추가 및 투표 등록했을때 게시판 보여주는 기능 추가

### 2023/11/28

- 토큰 내외부 전송 관련 기존에 transfer에 이벤트를 발생시켜 감지하게 하였는데 거래쪽에서 transferFrom을 사용하여 문제 발생 조치중
- 투표 관련하여 투표가 등록되는 시점에 매물을 보유하고 있는 사람에게만 투표권을 주기 위해 지갑 주소와 보유 개수를 넘겨주는 controller 작업 진행

### 2023/11/29

- 토큰 내외부 전송 관련 기능 끝난 줄알았는데 생각해보니 감지만 하고 토큰을 빼고 더해주는 기능을 안 넣어줌 그래서 그거관련 작업 진행
- 투표관련 wallet, amount 넘어오는 부분에 대한 수정 진행
- 업체에서 제공한 네트워크에 컨트랙트 배포 및 테스트 중
- 어드민 메인페이지 총 거래량, 총 거래 대금, 월 예상 수익에 대한 기능 작업

### 2023/11/30

- 어드민 메인 페이지 총 거래량, 총 거래 대금, 월 예상 수익에 대한 기능 작업 완료
- 최초로 로그인 한사람의 지갑 주소 등록관련 메타마스크 설정 및 모달창 제작 완료
- 배포 후 테스트하는데 메타마스크가 모바일에서 안불러와지는 상황 발생 딥링크를 통해 연결은 하였지만 더 나은 방법이 있나 찾는중

### 2023/12/01

- 현재 작업 된 파일들 merge 후 버그 테스트 진행
- 각 페이지별 버그 및 수정사항 정리 후 수정 시작

### 2023/12/02

- 수정 작업이 진행된 파일을 합쳐 로컬에서 배포하였는데 트랜잭션에 심볼 정보가 나오지 않는 현상이 발생하여 컨트랙트 파일의 private으로 설정된 symbol을 public으로 변경하여 해결

### 2023/12/5

- sto 프로젝트 1차 완성해서 프로젝트 발표 완료 보완점 찾아서 코드 수정 후 포트폴리오 작성 예정!

### 2023/12/06

- 프로젝트 발표 후 리펙토링 할 부분 정리
- 클래스 구조에 대한 학습 및 클래스 구조로 변경 해볼 예정

### 2023/12/07

- 저장소 위치 변경 테스트