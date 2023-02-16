function perimeter(count_sides,length_sides){
    return count_sides * length_sides;
}

let count_sides = prompt("Напишіть кількість сторін багатокутника");
let length_sides = prompt("Напишіть довжинку сторони багатокутника");

console.log(perimeter(count_sides, length_sides));