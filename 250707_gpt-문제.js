
// 배열에서 첫 번째와 세 번째 값을 변수에 할당하세요.

const fruits = ['apple', 'banana', 'orange'];

const [first , ,third] = fruits;

console.log(first); 
console.log(third);


//  아래 객체에서 name은 userName이라는 이름으로, age는 그대로 변수로 할당하세요.

const user = {
  name: 'Alice',
  age: 25,
  location: 'Seoul'
};

const {name : userName, age }= user;

console.log(userName); 
console.log(age);


// 함수 매개변수에서 객체 비구조화를 사용하여 name과 age를 받아 출력하세요.

const introduce = ({name, age}) => {
  console.log(`이름: ${name}, 나이: ${age}`);
};

const person = {
  name: 'Tom',
  age: 30,
  job: 'Developer'
};

introduce(person)



const data = {
  user: {
    name: 'Jane',
    address: {
      street: '123 Maple St',
      city: 'Busan'
    }
  }
};

// 아래 객체에서 street과 city를 각각 변수에 할당하세요.

const {
    user : {
        address : {street, city}
    }
}= data;

console.log(street); 
console.log(city);

//다음 배열에서 첫 번째 요소는 first, 두 번째는 second, 나머지는 rest라는 이름의 배열로 저장하세요.

const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

const [first1, second, ...rest] = colors;

console.log(first1);  
console.log(second); 
console.log(rest);