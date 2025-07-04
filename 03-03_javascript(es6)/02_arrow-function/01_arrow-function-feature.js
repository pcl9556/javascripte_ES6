/*
02. 화살표 함수의 특징
화살표 함수는 기존의 함수보다 표현만 간략한 것이 아니라 내부 동작 또한 간략함
*/

let theater = {
    store : '건대점',
    titles : ['어벤져스','겨울왕국', '스파이더맨',' 알라딘'],

    showmovwList() {
        this.titles,forEach(
            title => console.log(this.store + ':' + title)

            );
        
    }
}

theater.showmovwList();

//2.화살표 함수는 new 와 함께 호출 불가
const arrowFunc = () => {};
//new arrowFunc();

//3.화살표 함수는 super 없음

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

class Tiger extends Animal {

    move(lostweigth) {
        setTimeout(()=> super.move(lostweigth), 2000);
        console.log('먹이 찾기');
    }
}

let tiger = new Tiger('호랑이', 90);
tiger.move(1);
