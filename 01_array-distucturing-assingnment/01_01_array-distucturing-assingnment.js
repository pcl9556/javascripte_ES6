/* 01. 배열 구조 분해 할당
  구조분해 할당을 사용하면 배열이나 객체를 변수로 
*/
//이름과 성을 요소로 가진 배열
let nameArr = ['Gildong', 'Hong'];

let [firstName, lastName] = nameArr;

console.log(firstName);
console.log(lastName);

let [firstName2, lastName2] = 'Saimdang Shin'.split(" ");

console.log(firstName2);
console.log(lastName2);

//쉼표 사용하여 필요하지 읺은 요소 버리기
let [firstName3, lastName3] = ['firstName' , 'middleName','lastName'];
console.log(firstName3);
console.log(lastName3);
