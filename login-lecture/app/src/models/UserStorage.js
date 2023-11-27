// 모델: 모델: 데이터를 가지고 있는 모델 혹은 데이터를 제어하는 모델
// (데이터 모델과 이러한 데이터 모델을 처리하는 로직을 가진 모델이 있다.)

"use strict"

class UserStorage {
    static #users = {
        id: ["woorimIT", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["우리밋", "나개발", "김팀장"],
    };
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        // id 에 해당하는 키 값이 들어 있으면 true 반환, 이때 id에 해당하는 키 값을 빈 오브젝트에 넣어준다.
        // newUsers 를 return 할 때, 이 return 한 값은 다음 파라미터인 newUsers로 들어간다. 즉 빈오브젝트 안에 들어간다.
        return newUsers;
    }
}
// 클래스 선언은 파일명과 동일하게 하는 것이 좋다.
// 클래스 안에 변수를 선언할 때는 선언자(const)를 작성하지 않는다.
// static 변수 선언을 통해 클래스 자체에서 users에 접근할 수 있다. 이런 경우 별도로 새로운 변수(인스턴스)에 클래스를 생성하지 않고 클래스 자체에서 users 를 불러올 수 있다.
// 그러나 동시에 외부에서 이러한 내부 데이터에 접근하는 것을 불가능하도록 설정해주어야 한다. 이때 필요한 것이 은닉화이다.
// # 기호는 public 변수(기본값)를 private 변수로 바꾸어주는 은닉화 기호이다.
// 이때 은닉화에 의해 로그인이라는 비즈니스 로직을 처리할 때 필요한 users 데이터를 받을 수 없게 된다. 그래서 이 데이터를 받아올 수 있는 메써드를 만들어 주어야 한다.
// static getUsers 인 이유: 클래스 자체에서 메써드에 접근하려면 static 선언을 해야한다.(클래스 자체에서 변수에 접근하기 위한 방법과 같은 이치) 프런트 단에서 해당 메써드를 호출하여 데이터를 받아올 수 있다.
// 이처럼 데이터를 은닉화시키고 메써드로 전달을 해야한다.

// ...변수명(비구조화 할당(destructuring assignment): 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식. 배열 [], 혹은 객체 {} 안의 값을 편하게 꺼내 쓸 수 있는 문법
// reduce method: Array의 모든 요소들에 대해 체크하고 누적된 값을 출력하고 싶을 때 용이함. 새로 생성할 object(첫번째 파라미터)에 fields 의 원소가 하나씩 순회하면서 들어오는데, 변수(두번째 파라미터: field)에 저장한 값을 넣는 것이다.
// newUsers 에는 fields 배열의 초깃값이 들어가고, 그 다음 변수들은 field 안에 들어간다. 이때 fileds 의 초기값은 임의로 설정 가능하다.


module.exports = UserStorage; 