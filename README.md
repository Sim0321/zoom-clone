# Noom

Zoom Clone using NodeJS, WebRTC and Websockets

- nodemon
  - 프로젝트를 살펴보고 변경 사항이 있을 시 서버를 재시작해주는 프로그램
  - 서버를 재시작하는 대신에 babel-node를 실행
  - Babel은 작성한 코드를 일반 NodeJS코드로 컴파일
  - 그 작업을 src/server.js 파일에 함
  - server.js 파일에서는 express를 import하고, express 어플리케이션을 구성하고
  - view engine을 Pug로 설정하고, views 디렉토리가 설정되고
  - public 파일들에 대해서도 똑같은 작업을 함
  - public 파일들은 front에서 구동되는 코드
  - public 폴더를 유저에게 공개
-
