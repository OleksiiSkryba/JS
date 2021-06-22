//    task 0
// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let arr = ['hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false];

let str0 = arr[0];
let str1 = arr[1];
let str2 = arr[2];
let str3 = arr[3];

let num0 = arr[4];
let num1 = arr[5];
let num2 = arr[6];
let num3 = arr[7];
let num4 = arr[8];
let num5 = arr[9];
let num6 = arr[10];

let is0 = arr[11];
let is1 = arr[12];


// task 1
// let obj = {
//     str0: 'hello',
//     str1: 'owu',
//     str2: 'com',
//     str3: 'ua',
//
//     num0: 1,
//     num1: 10,
//     num2: -999,
//     num3: 123,
//     num4: 3.14,
//     num5: 2.7,
//     num6: 16,
//
//     is0: true,
//     is1: false
// }
//
// for (let objKey in obj) {
//     // return $(objKey) = ;
//     console.log(objKey + " = " + obj[objKey]);
//     console.log(typeof obj[objKey]);
//     alert(objKey + " = " + obj[objKey]);
//     document.write(`<div>${objKey} - ${obj[objKey]} </div><hr/>`);
// };


// task 2
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let name = prompt(`ім'я`);
// let fatherName = prompt(`по батькові`);
// let age = +prompt(`вік`);
// alert(`Вітаю ${name} ${fatherName}. Тобі ${age} років.`);


//task 3
// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
// let ref = str1 + '.' + str2 + '.' + str3;
// console.log(ref);


// task 4
// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt.
// Додати їх всі мож собою і результат вивести в консоль.
// let n0 = parseInt(prompt(`give me number please!`));
// let n1 = parseInt(prompt(`give me number please!`));
// let n2 = parseInt(prompt(`give me number please!`));
// let n3 = parseInt(prompt(`give me number please!`));
//
// let res = n0+n1+n2+n3;
// console.log(res);


// task 5
// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
// Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let n0 = parseFloat(prompt(`give me number please!`));
// let n1 = parseFloat(prompt(`give me number please!`));
// let n2 = parseFloat(prompt(`give me number please!`));
//
// let result = n0+n1+n2;
// console.log(result);


// tasak 6
// - За допомогою prompt() отримати 3 числа з плаваючою точкою.
//     Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
// let n0 = Math.round(prompt(`give me number please!`));
// let n1 = Math.round(prompt(`give me number please!`));
// let n2 = Math.round(prompt(`give me number please!`));
//
// let result = n0+n1+n2;
// console.log(result);


// task 7
// - За допомогою prompt() отримати 2 цілих числа.
//     Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
// let num = Math.round(prompt(`give me number please!`));
// let n = Math.round(prompt(`give me number please!`));
//
// let pow = Math.pow(num, n);
// console.log(pow);


// task 8
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof (a));
// console.log(typeof (b));
// console.log(typeof (c));


// task 9
// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!
// 5 < 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 === 6 -> false
// 10 === 10 -> true
// 10 == 10 -> true
// 10 < 10 -> false
// 10 > 10 -> false
// 10 = 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true


// task 10
// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 );  //false
// console.log(34 > 33 && 23 < 90 );  //true
// console.log(99 > 100 && 45 > 12 );  //false
// console.log(132 > 100 || 45 < 12 );  //true
// console.log(111 > 11 || 45 < 111 );  //true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );  //true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );  //true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );  //false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));  //true
// console.log(!!'-1');  //true
// console.log(!!-1);  //true
// console.log(!!'0');  //true
// console.log(!!'null');  //true
// console.log(!!'undefined');  //true
// console.log(!!(3/'owu'));  //false
// console.log((111 > 11 || 45 < 111) ||  !!'0');  //true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));  //false


// _____________________________________________________________________________________________________________________

// Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
// let heightC = 10;
// let dC = 4;
// let v =Math.PI*Math.pow((dC/2), 2)*heightC;
// console.log(v + ' куб. м.');

