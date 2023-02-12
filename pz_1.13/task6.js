let characters = [
    {name: "barney", age: 36},
    {name: "fred", age: 40}
];

pluck(characters, 'name')

function pluck(arr, obj){
    arr.forEach(el => {
        console.log(el[obj])
    })
}
