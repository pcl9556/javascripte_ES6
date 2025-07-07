//02.객체 구조 분해 할당

//상품명, 색상, 가격
let pants = {
    productName : '바지',
    color : '검정색',
    price : 30000
};

let {productName, color, price} = pants;

console.log(productName);
console.log(color);
console.log(price);

let {color : co, price :pr, productName :pn} = pants;
console.log(co);
console.log(pr);
console.log(pn);
