# lec
강의를 듣고 생성한 프로젝트 저장하는 Repository 입니다.

1. 로그인 강의
  - 우리밋 [Node.js] 백엔드 맛보기 강의: https://www.youtube.com/playlist?list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs
  - 폴더 구조 (터미널에서 tree . 명령어 입력시 현재 경로의 디렉토리 트리를 볼 수 있다.) 

```
└─app
    ├─bin
    └─src
        ├─models
        ├─public
        │  └─js
        │      └─home
        ├─routes
        │  └─home
        └─views
            └─home
```

```
└─app // 애플리케이션의 루트 폴더
    ├─bin // 애플리케이션 실행 파일이 있는 폴더
    └─src // 소스 코드 및 애플리케이션의 핵심 파일들이 있는 폴더
        ├─models // 데이터 모델링과 관련된 파일들을 보관하는 폴더(일반적으로 데이터베이스 스키마, ORM 모델 등이 포함)
        ├─public // 정적 파일들을 보관하는 폴더(클라이언트에게 제공되는 JavaScript, CSS, 이미지 등의 정적 파일 포함)
        │  └─js // JavaScript 파일들을 보관하는 폴더
        │      └─home // 홈페이지와 관련된 JavaScript 파일이나 모듈이 위치할 수 있는 폴더
        ├─routes // Express 애플리케이션의 라우팅 파일들을 보관하는 폴더(각 경로별로 라우팅을 관리하는 파일들이 위치할 수 있음) 
        │  └─home 홈 페이지와 관련된 라우팅 파일, 컨트롤러 파일이 있는 폴더
        └─views // Express 애플리케이션의 뷰(템플릿) 파일들을 보관하는 폴더(클라이언트에게 렌더링되는 HTML, EJS, Pug 등)
            └─home // 홈 페이지와 관련된 뷰 파일이 위치하는 폴더 
```
