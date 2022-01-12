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

// let aask = (question, yes, no) => {
//     if(confirm(question)) {
//         debugger;
//          yes();
//     }
//     else no();
// };

// aask(
//     "Вы согласны?",
//     () => alert('Вы согласились!'),
//     () => alert('Вы отменили выполнение!')
//     );

/* ОБЪЕКТЫ */


// let user = {


//     name: "John",
//     age: 30,
//     isAdmin: true
// };
// user.surname = "Smith";
// user.name = "Pete";
// for (let key in user) {
//     alert(`Prop: ${key} = ` + user[key]);
// }


// let obj = {};
// alert(obj);
// function isEmpty(obj){
//     for (let key in obj) {
//         return  false; 
//     }
//     return true;      
// }
// alert(isEmpty(obj));


// while(true) {
//     let property = prompt("какое свойство хотите получить?", "admin, name, age");
//     if(property == undefined) break;
//     debugger;
//     if(property == "admin") property = "isAdmin";
//     alert("Свойство: " + user[property]);
// }
// alert(user.name);
// alert(user.age);
// alert(user.isAdmin);

let salarie = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = (obj) =>{
    let sumValue = 0;
    for (let key in salarie) {
        sumValue += salarie[key];
    }
    return sumValue;

};

// alert(sum(salarie));

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
}


function multiplyNumeric(obj){
    for (let key in obj) {
        if(typeof obj[key] == 'number') obj[key] *= 2;
    }
}

function showMenu(obj){
    for (let key in obj) {
        alert(obj[key]);
    }
}

// showMenu(menu);
// multiplyNumeric(menu);
// showMenu(menu);





// let user = {
//     name: "Джон",
//     age: 30,

//     sayHI() {
//         alert(this.name);
//     }
// };

// user.sayHI();



// let user = {
//     name: "Джон",
//     go: function() { alert(this.name) }
//  };
  
// (user.go)()

// *** this

// let calculator = {

//     read: function() {
//         this.a = +prompt("Введите первое значение!", "5");
//         this.b = +prompt("Введите второе значение!", "4");
//     },

//     sum: function() {
//         return this.a + this.b;
//     },

//     mul: function(){
      
//         return this.a * this.b;
//     },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
        
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert(this.step);
        return this;
    }

};

ladder.up().up().down().showStep();
