"use strict"

const output = {
    home: (req, res) => {
        res.render("home/index")
    },
    // 컨트롤러 함수 생성
    // views 폴더가 기본 경로로 설정되어 있음: views\home\index.ejs 파일을 렌더합니다.
    // home, login = 해당 페이지를 렌더링하는 함수

    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        console.log('hi');
        console.log(req.body);
    }
};
// login.js 에서 선언한 body 정보를 불러옴.
// body를 가져오기 위해서 body-parser 모듈을 설치해야함. *app.js 파일 확인 app.use 구문


module.exports = {
    output,
    process,
};
// 위에서 선언한 함수들을 외부(index.js)에서 사용할 수 있도록 exports 함.
// object 형태일 때, key: value 형태가 아닌 key 로만 선언한 경우, key: key 와 같은 형태로 자동으로 저장됨.
