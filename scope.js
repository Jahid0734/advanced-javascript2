let bonus = 20;
function sum(first, second) {
    const result = first + second + bonus;
   // console.log(bonus);
    if(result > 29){
        const mood = "happy";
        console.log(mood)
    }
    return result;
    
}
const output = sum(3, 7);
console.log(output)

