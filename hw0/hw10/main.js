let str0 = 'Hallo';
let str1 = 'OWU';
let str2 = 'com';
let str3 = 'ua';
let num0 = 1;
let num1 = 10;
let num2 = -999;
let num3 = 123;
let num4 = 3.14;
let num5 = 2.7;
let num6 = 16;
let bool0 =true;
let bool1 =false;

let str = str0+' '+str1+"."+str2+'.'+str3;

// console.log(str);
// alert(str);
// document.write(str);

// let name = prompt('inter name');
// let surname = prompt('inter surname');
// let age = prompt('inter age');

// alert(str0+' '+name+' '+surname+'!'+' '+'Тобі'+ age+ 'років.');

let color = prompt('inter color','black');
let isFree = confirm('Is road clear?');

switch (color) {
    case 'green' : isFree ? alert('Go!') : alert('Wait & Go!');
    break;
    case 'yellow': isFree ? alert('Warning!') : alert('Warning!!!');
    break;
    case 'red' : isFree ? alert('Stop!') : alert('!!!Stop!!!');
    break;
    default: alert('Break!');
}