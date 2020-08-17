const number = [1,2,3,4,5,6,7,8,9];
// const part = number.slice(2, 6);
const removed = number.splice(2,6, 77, 88)
// console.log(removed);
// console.log(number)

const together = number.join(",");
console.log(together);