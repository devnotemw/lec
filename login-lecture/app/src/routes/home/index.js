"use strict"
// "ES(ECMAScript)를 준수하겠다."라는 것을 명시함.
// JS 파일을 만들 때 항상 상단에 명시할 것.(권장)

const express = require('express');
const router = express.Router();
// 라우트 파일에서는 app 이 아닌 router 로 선언한다.

const ctrl = require("./home.ctrl");
// 현재 폴더에 있는 home.ctrl 을 불러옵니다.

router.get("/", ctrl.output.home);
// app.get 이 아닌 router.get 이 되었음을 알 수 있다.
// home.ctrl.js 파일에 컨트롤러를 분리, 해당 파일로부터 컨트롤러 함수를 불러옵니다.
// 컨트롤러 부분을 모듈화해줌으로써 루트 경로가 어디로 연결되는지 명확하게 알 수 있다.

router.get("/login", ctrl.output.login);

router.post("/login", ctrl.process.login);

module.exports = router;
// 외부(app.js)에서 router 를 사용할 수 있도록 export 함.

