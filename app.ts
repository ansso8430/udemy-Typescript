function add(n1:number, n2:number) {
    console.log(typeof number1);

    // typescript 이미 에러 > 필요없는 에러코드
    // 자바스크립트 vs 타입스크립트
    // 개발 도중에 에러가 발생 > 어떤 타입을 보유할 수 있는지 확실히 해야함
    // if(typeof n1 !=='number' || typeof n2 !== 'number'){
    //     throw new Error('Incorrect input!')
    // }

    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

