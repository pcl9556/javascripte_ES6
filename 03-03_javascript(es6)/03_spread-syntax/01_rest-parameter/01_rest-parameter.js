/* 01. 나머지 매게 변수 */
function merge(msg1, msg2) {
    return msg1 + msg2;
}

console.log(merge('안녕'));
console.log(merge('안녕','반갑'));
console.log(merge('안녕','반갑','이름은'));

//나머지 매게 변수 ... 를 이용하면 한곳에 모으기 가능
function mergeAll(...ards) {

    let message ='';

    for(let arg of args) message += arg;

    return message;
}

console.log(merge('안녕'));
console.log(merge('안녕','반갑'));
console.log(merge('안녕','반갑','이름은'));

// 주의 !! 항상 마지막에 있어야 함.
function func(arg1, arg2, ... args) {}
