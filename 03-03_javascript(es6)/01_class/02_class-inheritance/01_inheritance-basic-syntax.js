/*02. 
클래스 상속 
클래스 상속을 사용하면 클래스를 다른 클래스로 확장 할 수 있다.
 */

//01. 상속 기본 문법
class Animal {

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eat(foodwaight) {
        this.weight += foodwaight;
        console.log(`${this.name}은 `);
    }

    move(lostweigth) {
        if(this.weight >lostweigth)
            this.weight -= lostweigth;
        console.log(`${this.name} 은 운직임으로 인해`);
    }
}

let animal = new Animal('동물', 30);
animal.eat(1);
animal.move(0.5);

class Human extends Animal {

    develop(language) {
        console.log(`${this.name}은 ${language}를 개발함`);
    }
}

let human = new Human('수강생',70);

//메서드 접근 가능
human.eat(2);
human.move(0.5);

//메서드 접근 가능
human.develop('javascript');

//키워드 extends 는 프로토 타입을 기반으로 동작
//
//그렇기 때문에 Human.prototype.
