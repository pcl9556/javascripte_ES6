//02. 다양한 사용법
// 객체에 존재하지 않는 프로퍼티는 기본 값을 설정해서 사용 할 수 있음

let shirts = {
    productName: '셔츠'
};

let { productName : productName2 = '어떤 상품', color : color2 = '어떤 생상', price : price2 =0} = shirts;
console.log(productName2);
console.log(color2);
console.log(price2);

let pants = {
    productName : '바지',
    color : '검정색' ,
    price : 30000
};

let {productName : productName3} = pants;
console.log(productName3);

let {productName : productName4, ...rest } = pants;
console.log(productName4);
console.log(rest.color);
console.log(rest.price);
