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

const users = {
    id: ["woorimIT", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;
        
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다",
        })
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
