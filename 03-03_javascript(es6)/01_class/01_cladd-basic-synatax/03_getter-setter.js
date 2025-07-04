/* 03. getter, setter */
class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    //getter 함수
    get name() {
        console.log('get name 동작');
        return this._name;
    }

    get price () {
        console.log('get price 동작');
        return this._price;
    }

    set name(value) {
        console.log('set name 동작');
        this._name = value;
    }

    set price(value) {
        console.log('set price 동작');
        if(value < 0) {
            console.log('가격이 음수 일 수 없음');
            this._price = 0;
            return;
        }

        this._price = value;
    }
}

let phone = new Product('전화기', 2000);
console.log(phone.name + "," + phone.price);

let computer = new Product('컴퓨터', -100000);
console.log(computer.name + "," + computer.price);