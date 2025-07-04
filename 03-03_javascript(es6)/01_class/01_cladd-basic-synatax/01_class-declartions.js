/*
01. 클래스 기본 문법
동일한 종류의 객체를 여러개 생성해야 하는 경우 객체 리터널을 여러개 생성하기 보다
클래스 문법을 통해 생성 가능
 */

//01. 클래스 선언
class Student {
     //생성자로 인스턴스 생성 및 초기화
     //1개 이상 정의 불가, 생략의 경우 암묵적 정의
     //암묵적으로 ,this 를 반환하므로 리턴 불가
    constructor(name) {
        this.group =1; //초기화
        this.name = name; 
    }

    //프로토타입 메서드 
    introduce() {
        console.log(`안녕하세요 저는 ${this.group}반 학생 ${this.name} 입니다 `);
    }
}

let Student =  new Student ('홍길동');  //인수로 초기 값 생성
student.introduce();

console.log(typeof Student);  //클래스도 함수의 한 종류
console.log(Student === Student.prototype.construtor);
console.log(Student.prototype.introduce);   //prototpype에 저장됨.
console.log(Object.getOwnPropertyNames(Student.prototype));  //메서드 확인

//생성자 함수 - 클래스 문법과 유사함.
function Teacher(name) {
    this.group =1;
    this.name = name;
}

Teacher.prototype.introduce = function() {
    console.log(`안녕하세요 저는 ${this.group}반 교사`);

}
 let teacher = new Teacher('유관순');
 teacher.introduce();

 new Student();
 Teacher();
 