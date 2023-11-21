// 모듈
const express = require('express');
const app = express();

// 앱 세팅
app.set("views", "./src/views");
// view 파일이 저장될 폴더 이름을 views 로 설정
app.set("view engine", "ejs")
// view engine 을 ejs 로 설정


// 라우팅
const home = require("./src/routes/home")
// 현재 폴더 - routes - home 에 있는 javascript 파일을 읽어오도록 요청한다. 여기서는 index.js
// Router 를 불러오기 위해서 경로를 입력해주어야 하는데, 이때 상대경로를 입력한다.

app.use(express.static(`${__dirname}/src/public`))
// ejs 파일과 js 폴더를 연결하는 미들웨어 설정1. 현재 파일(app.js)의 위치를 가져와서, 그 안에 있는 src/public 폴더를 정적 경로에 추가한다.

app.use("/", home);
// app.use() 는 미들웨어를 등록하는 메써드

module.exports = app;
// 외부(www.js)로 모듈을 exports 합니다.



//package.json의 기능
// name: 패키지 이름, version: 배포 버전, main: 메인으로 실행될 파일, bin: binary, 실행될 파일들이 들어있음.
// dependencies: 의존성, devDependecies: 개발할 때만 필요한 도구(Test, Webpack, Barbel, Freetier, eslint 등)
// script: 패키지에서 사용하고 싶은 명령어 생성. 서버 가동 명령어를 바꿀 수 있다.
// author: SW 제작자, license: 프로젝트 라이센스 지정, ISC 는 기본 값(오픈 소스 라이센스 중 하나: 누구나 사용할 수 있도록 허용함.)
// homepage, repository(type, url) 등도 지정할 수 있다.

// package-lock.json
// 좀더 명확한 버전을 설치하기 위해 필요한 파일
// 사용된 모듈들의 버전(package.json 파일에 명시된 버전은 range로, package-lock.json 파일에서 더 명확하게 기록함)