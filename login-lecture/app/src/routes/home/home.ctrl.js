"use strict"

const UserStorage = require("../../models/UserStorage");

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
        const id = req.body.id,
        psword = req.body.psword;
    const users = UserStorage.getUsers("id", "psword");
        // 변수에 정의해둔 클래스를 생성하려고 할 때, 클래스 이름과 동일하게 작명하지 않는다. (변수명은 첫 단어는 소문자로 시작, 클래스는 단어 간 대문자로 시작)

        const response = {};
        // response 객체를 만들어서 코드를 정리함.
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "로그인에 실패하셨습니다."
        return res.json(response)
    }
};
// login.js 에서 선언한 body 정보를 불러옴.
// body를 가져오기 위해서 body-parser 모듈을 설치해야함. *app.js 파일 확인 app.use 구문
// 로그인 인증: users.id 가 프론트 단에서 넘어온 id 를 포함한다면, 해당 인덱스와 비밀번호가 일치하는지 확인한다.
// 일치한다면 success: true 라는 object를 json 형태로 리턴한다. res.json()의 반환 값은 Promise 이다.
// 실패하면 success: flase 객체와 실패 메시지를 리턴한다.


module.exports = {
    output,
    process,
};
// 위에서 선언한 함수들을 외부(index.js)에서 사용할 수 있도록 exports 함.
// object 형태일 때, key: value 형태가 아닌 key 로만 선언한 경우, key: key 와 같은 형태로 자동으로 저장됨.
