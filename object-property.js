const students = [
    {id: 20, name: "jahid"},
    {id: 21, name: "nasim"},
    {id: 22, name: "nasir"},
    {id: 23, name: "Monir"}
]
// const names = []
// for(let i = 0; i < students.length; i++){
//     const element = students[i];
//     const name = element.name
//     names.push(name);

// }

const names = students.map(s => s.name);
const ids = students.map(s => s.id)
const idNumber = students.filter(s => s.id > 21)
const idNumber2 = students.find(s => s.id > 21)
console.log(idNumber2)