"use struct";

function checkAge(age){

    return (age > 18) ? true : confirm('Родители разрешили?');
    return (age > 18) || confirm('Родители разрешили?');
    if (age>18){
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}// console.log(checkAge(9));

function min(a,b){
    return (a>b) ? b : a 
}//console.log(min(22,44));


let a, b;
function getDigits(){
    
    while(true){
        a = prompt("Введите первое число");
        if(a>0 && a != null) break;
    }
    while(true){
        b = prompt("Введите второе число");
        if(b>0 && b != null) break;
    }
}
function pow(x,n){
    return x ** n;
}
function pow2(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
}
// getDigits();
// alert(pow(a,b));
// alert(pow2(a,b));

// function ask(question, yes, no){
//     if(confirm(question)) yes();
//     else no();
// }

// function showOk() {
//     alert('Вы согласны');
// }
// function showCancel(){
//     alert('ВЫ отменили выполнение!');
// }
// ask("Вы согласны?", showOk, showCancel)


// function ask(question, yes, no){
//     if(confirm(question)) yes()
//     else no();
// }
// ask(
//     "Вы соглавсны?",
//     function() {alert('Вы согласились!');},
//     function() {alert('Вы отменили выполнение!');}
// )

function aask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
};

aask(
    "Вы согласны?",
    () => alert('Вы согласились!'),
    () => alert('Вы отменили выполнение!')
    );
