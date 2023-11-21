// server 가동 모듈화

"use strict"

const app = require("../app");
// 상위 폴더의 app.js 파일을 요청합니다.

const PORT = 3000;

app.listen(PORT, () => {
    console.log('서버 가동')
});

// 서버 가동을 하기 위해서는 서버 가동 명령어가 있는 파일을 실행시켜야 한다. 따라서 터미널에는 다음과 같이 입력해야 한다.
// node ./bin/www.js