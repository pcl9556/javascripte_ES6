// 04. 함수의 매개 변수가 많거니 매개변수 시본값이 필요한 경우등 활용

 function displayProduct(producer="아무개", width=0, heigh=0, items=[]){}

 displayProduct('신사임당',undefined, undefined, ['Coffee, Donut']);

 function displayProduct({producer = '아무개', width=10, heigh=20, items=[]}){
    console.log(`${producer} ${width} , ${heigh}`);
    console.log(items);
 }

 displayProduct(exampleProduct);

