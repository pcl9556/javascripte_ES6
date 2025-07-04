/* 02. 클래스 표현식 */

//1..익명 클래스 표현식
let Driver =class {

    staerEngine() {
        console.log('차에 시동 걸고 출발!');
    }
};

new Driver().staerEngine();

//2.기명 클래스 표현식
let Car = class Vehicle {

    driver() {
        console.log('주행 중');
    }
};

new Car().driver();

//3. 클래스 동적 생성
function stopper(message) {

    return class {
        stopDriver() {
            console.log(message);
        }

    };
}

let EnginStopper = stopper('시동 끄기');
new EnginStopper().stopDriver();

