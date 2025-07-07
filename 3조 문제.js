//console.log 안에 있는 ${} 안에 적절한 변수를 넣어 콘솔로 감자튀김이 출력되게 해주세요.

let [name1="맛있는",name2="복",name3="분",name4="자"] = "곶감";
let [,num2,num3]="갑툭튀";

let kim = "김";
let lee = "이";
let park = "박";
let choi = "최";

[kim,lee,park,choi]=[park,lee,kim,choi];

function sentence() {
    console.log(`${name2} ${name4} ${num3} ${park}`);
};

sentence();


//문제

function getStringLength(str) {
  const arr = [...str];  
  return arr.length;
}

console.log(getStringLength("hello")); 
console.log(getStringLength("안녕하세요")); 


//문제
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

const [first, second, ...rest] = colors;

console.log(first);  // 'red'
console.log(second); // 'blue'
console.log(rest);   // ['green', 'yellow', 'purple']


//문제
class Student
{
    constructor(param)
    {
        this.group=1;
        this.inputp=param;
    }
    introduce()
    {
        console.log(`${this.group}`);//내부값
        console.log(`${this.inputp}`);//외부에서 받은 변수
    }
}
const s1 = new Student ('홍길동');