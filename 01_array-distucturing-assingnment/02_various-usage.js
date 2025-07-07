// 02. 다양한 사용법

// 할당 연산자 우측엔 모든 이터터러블이 올수 있고 좌측엔 뭐든지 올 수 있다.
let user = {};
[user.firstName, user.lastName] = 'Gwansoon Yu'.split('');

console.log(user.firstName);
console.log(user);


let student = '유관순';
let teacher = '홍갈동';

[student, teacher] = [teacher, student];

console.log(student);

//rest parameter ...로 나머지 요소를 한번에 가져 올 수 있다.
let [sign1, sign2, ...rest] = ['양자리', '쌍둥이자리', '게자리', '사자자리'];

console.log(sign1);
console.log(sign2);
console.log(rest);


let [firstName4 = '아무개', lastName = '김'] = ['길동'];
console.log(firstName4);  //배열에서 받아옴
console.log(lastName);    //기본 값

