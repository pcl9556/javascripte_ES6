/* 
02. 메서드 오버라이딩
부모 메서드 전체를 교체하지 않고, 부모 메서드를 토대로 일부 기능만 변경하고 싶을때,
부모 메서드의 기능을 확장하고 싶을때
 */

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

// Animal을 상속받는 Tiger  
class Tiger extends Animal {

    attack(target) {
        console.log(`${this.name}은 `);
    }

    //Animal의 move를 확장한 
    move(target) {
        super.move(0.1);
        this.attack(target);
    }
}

let tiger = new Tiger('호랑이' ,90 );
tiger.move('사슴');