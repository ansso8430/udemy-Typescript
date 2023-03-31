function combine(input1: number | string, input2: number | string) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const conbinedAges = combine(30,26);
console.log(conbinedAges);

const combineNames = combine('MAX', 'Annna');
console.log(combineNames);
