let characters = [
    {name: "barney", age: 36},
    {name: "fred", age: 40}
];

console.log(pluck(characters, 'name')); //['barney', 'fred'];

function pluck(array, fieldName) {
    let arr = []
    array.forEach(el => arr.push(el[fieldName]))
    return arr
}