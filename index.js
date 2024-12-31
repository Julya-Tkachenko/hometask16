'use strict'

// Написати функцію, яка приймає 1 параметр. Та складає значення з тим, що передали перший раз і т. д.
// Все це із замиканнями, наприклад:

// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27
debugger
function getAdder() {
    let result = 0;
    return (num) => {
        result += num;
        return result;
    }
}
const sum = getAdder();

console.log(sum(4)); 
console.log(sum(6)); 
console.log(sum(10)); 
console.log(sum(7)); 