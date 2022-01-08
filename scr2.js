"use struct";

let num = 10;


for(let i = 2; i <= num; i++){
    for(let j = 2; j < i; j++){
        if(i % j == 0) {
            break;
        }
    }
    
    alert(`Простое ${i}`);
}