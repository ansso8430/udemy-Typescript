type Combinable = number | string;
type CoversionDescriptor = 'as-number' | 'as-text'

    function combine(
            input1: Combinable, 
            input2: Combinable, 
            resultConversion: CoversionDescriptor   // union type
        ) {
        let result;
        if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number' ) {
            result = +input1 + +input2;
        } else {
            result = input1.toString() + input2.toString();
        }
        // if (resultConversion === 'as-number') {
        //     return +result; 
        //     // return parseFloat(result);        
        // } else {
        //     return result.toString();
        // }
        return result;
    }

const conbinedAges = combine(30, 26, 'as-number');
console.log(conbinedAges);

const conbinedStringAges = combine('30', '26', 'as-number');
console.log(conbinedStringAges);

const combineNames = combine('MAX', 'Annna', 'as-text');
console.log(combineNames);
