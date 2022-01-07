"use struct";

let num = 10;

out:
for(let i = 2; i <= num; i++){
    for(let j = 2; j < i; j++){
        if(i % j == 0) continue out;
    }
    alert(`Простое ${i}`);
}
// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }