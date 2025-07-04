/* 
 03. 생성자 오버라이딩
  클래스가 다른 클래스를 상속 받고 constructor가 만들어진다.
  생성자는 기본적으로 부모 생성자를 호출한다.
  이때 부모 생성자에도 인수를 모두 전달하는데, 클래스 자체에 생성자가 없는 경우엔 이런일이 모두 자동ㅇ로 일어남
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

class Dear extends Animal {

    constructor(name, weight, legLength) {
        super(name, weight);
        this.legLength =legLength;
    }

    hide(place) {
        console.log(`${this.name} 은 ${place}에 숨는다`);
    }
}

let dear = new Dear('사슴',40,4);
dear.hide('동굴 안');