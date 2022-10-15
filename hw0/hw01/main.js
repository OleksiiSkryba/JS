let str0 = "hello";
let str1 = "owu";
let str2 = "com";
let str3 = "ua";

let num0 = 1;
let num1 = 10;
let num2 = -999;
let num3 = 123;
let num4 = 3.14;
let num5 = 2.7;
let num6 = 16;

let bool0 = true;
let bool1 = false;

str0 = "world";
str1 = "lviv";
 
let string = str1 +'\n'+ str0;
// console.log(str0);
// alert(string);
// document.write(str0);
 
// let name = prompt("inter name");
// let surname = prompt("inter surname");
// let age = prompt("inter age");
// document.write('Вітаю '+name + ' '+ surname +'. Тобі '+age+' років.');

// let url = str1+'.'+str2+'.'+str3;
// console.log(url);

// let num01 = parseInt(prompt("inter number"));
// let num02 = parseInt(prompt("inter number"));
// let num03 = parseInt(prompt("inter number"));
// let num04 = parseInt(prompt("inter number"));

// console.log(num01+num02+num03+num04);

// let num01 = Math.round(parseFloat(prompt("inter number")));
// let num02 = Math.round(parseFloat(prompt("inter number")));
// let num03 = Math.round(parseFloat(prompt("inter number")));
// let num04 = Math.round(parseFloat(prompt("inter number")));

// let sum = num01+num02+num03+num04;
// console.log(sum);

// let num01 = Math.round(parseFloat(prompt("inter number")));
// let num02 = Math.round(parseFloat(prompt("inter number")));
// let res = Math.pow(num01,num02);
// console.log(res);

// let a = 100;
// let b = '100';
// let c = true;

// console.log(typeof(a), typeof(b), typeof(c));

let n = 5 < 6;
let q = 5 > 6;
let w = 5 == 6;
let e = 5 === 6;

let r = 10 <= 10;
let t = 10 >= 10;
let y = 10 < 10;
let u = 10 > 10;
let i = 10 != 10;


let o = 123 === '123';
let p = 123 == '123';


// console.log(n,q,w,e,r,t,y,u,i,o,p);

// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

// let n1 = +prompt('inter number');
// let n2 = +prompt('inter number');
// let n3 = +prompt('inter number');

// if((n1 <= n2)&&(n2 <= n3)){
//     alert(n1+('\n')+n2+('\n')+n3);
// }else if((n1 <= n3)&&(n3 <= n2)){
//     alert(n1+('\n')+n3+('\n')+n2);
// }else if((n2 <= n1)&&(n1 <= n3)){
//     alert(n2+('\n')+n1+('\n')+n3);
// }else if((n2 <= n3)&&(n3 <= n1)){
//     alert(n2+('\n')+n3+('\n')+n1);
// }else if((n3 <= n1)&&(n1 <= n2)){
//     alert(n3+('\n')+n1+('\n')+n2);
// }else {
//     alert(n3+('\n')+n2+('\n')+n1);
// };

const isRoadClear = confirm("Is road clear?");
let color = prompt("inter color");

switch (color) {
    case "red":
        isRoadClear ? console.log("Stop!") : console.log("!!!Stop!!!");
        break;
    case "yelow":
        isRoadClear ? console.log("Жди!") : console.log("!!!Всё равно жди!!!");
        break;
    case "green":
        isRoadClear ? console.log("Go!") : console.log("!!!Потерпи!!!");
        break;

    default:
        console.log("wrong color!");
        break;
}