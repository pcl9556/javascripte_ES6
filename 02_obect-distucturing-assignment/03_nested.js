//03. 중첩 구조 분해
let product = {
    size : {
        width :10,
        heigh : 30
    },

    items : ['doll', 'robot']
};

let {
    size : {
        width,
        heigh, 
    },
    items : [items1, items2],
    producer = '홍길동'
} = product;

console.log()
