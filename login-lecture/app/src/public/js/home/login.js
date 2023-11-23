"use stict";
// 프론트 단에서 작동하는 JS파일

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");
// DOM 객체: 클라이언트가 HTML에서 입력한 데이터를 JS에서 제어할 수 있어야 한다.
// 이를 가능토록하는 것이 DOM 객체이다.(일종의 인터페이스) *Document Object Model
// Selector *선택자: JS 파일에 있는 태그를 지정
// #id 는 태그의 id 가 "id" 로 설정 된 태그를 지정해서 가져온다.
// query selector 에서 해당 파일을 가져오기 전에 아래에 오는 명령어가 먼저 실행된다.
// 따라서 ejs 파일에서 defer 옵션을 부여해주어야 한다.

// console.log(id, psword)

loginBtn.addEventListener("click", login);
// loginBtn이 클릭되면 login 이벤트를 실행한다.

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };

    console.log(req);
};
// 요청 데이터이므로 req 변수에 담아준다.
// object 선언

