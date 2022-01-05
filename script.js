"use struct";


let currentUserName = prompt("Представтесь", ["Евгений"]);
let isTrue = confirm(`Вас зовут ${currentUserName}?`);
alert(isTrue);