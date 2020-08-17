let total = 0;
function add(num1, num2, ) {
    const numbers = [...arguments];
    for(let i = 0; i < numbers.length; i ++){
        const element = numbers[i];
        total  =  total + element
            
    }
    return total;
}
const result = add(2, 3, 5, 7,20, 25);
console.log(total)