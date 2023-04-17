function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(15, 2)); // Result: 17
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
