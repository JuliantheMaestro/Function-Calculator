let arr = [];
const num1 = 3;
const num2 = 5;
let string = "+"


function calculator (x, y) {
    if (string === "+") {
        return x + y
    } else if (string === "-") {
        return x - y
    } else {
        return x + y
    }
};

for (let i = 0; i < 10; i++) {
    i++;
    let val1 = i*5;
    let val2 = i*i;

    let result = calculator(val1, val2);
    arr.push(result);
};

console.log(arr);

