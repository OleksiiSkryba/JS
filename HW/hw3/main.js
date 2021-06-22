// 1) створити функцію яка приймає масив та виводить його  ( ͡° ͜ʖ ͡°͡)
// function publisher(arr) {
//     console.log(arr);
// }

// 2) створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попередню функцію.
// function pusher(arr) {
//     for (let i = 0; i < 20; i++) {
//         arr.push(Math.round(Math.random()*1000))
//     }
//     publisher(arr);
// }
//
// let arr = [];
//
// pusher(arr);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function sorts(x, y, z) {
//     if (x < y && x < z){
//         console.log(x)
//     }
//     else if(y < x && y < z){
//         console.log(y)
//     }else{
//         console.log(z);
//     }
// }
//
// sorts(15,7,26);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function resorts(x, y, z) {
//     if (x > y && x > z){
//         console.log(x)
//     }
//     else if(y > x && y > z){
//         console.log(y)
//     }else{
//         console.log(z);
//     }
// }
//
// resorts(15,7,6);

// 5) створити функцію яка повертає найбільше число з масиву
// let nums = [3,5,7,9,2,3,4,5];
// function bigNum(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > nums[i+1]){
//             let x = nums.splice(i,1);
//             nums.splice(i+1,0, x[0] );
//         }
//     }
//     console.log(nums[nums.length-1]);
// }
// bigNum(nums);
//
// // 6) створити функцію яка повертає найменьше число з масиву
// function minNum(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < nums[i+1]){
//             let x = nums.splice(i,1);
//             nums.splice(i+1,0, x[0] );
//         }
//     }
//     console.log(nums[nums.length-1]);
// }
// minNum(nums);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function total(arr = []) {
//     let sum = 0;
//     for (let item of arr) {
//         sum += item;
//     }
//     return sum;
// }
// let summa = total(arr);
// console.log(summa);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function midNum(arr) {
//     let sum = 0;
//     for (let item of arr) {
//         sum += item;
//     }
//     let midSum = sum/arr.length;
//     return midSum
// }
// let mid = midNum(arr);
// console.log(mid);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// let arrX = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function lock(arr) {
//     let keys = [];
//     for (let obj of arr) {
//         for (const objKey in obj) {
//           keys.push(objKey)
//         }
//     }
//     return keys
// }
// let keys = lock(arrX)
// console.log(keys);
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// let arrX = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function lock(arr) {
//     let values = [];
//     for (let obj of arr) {
//         for (let objKey in obj) {
//           values.push(obj[objKey]);
//         }
//     }
//     return values
// }
// let values = lock(arrX)
// console.log(values);
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];
// function sinergy(arr1,arr2) {
//     let value = [];
//     for (let i = 0; i < arr1.length; i++) {
//         value.push(arr1[i] + arr2[i]);
//     }
//     return value
// }
// let res = sinergy(arr1,arr2)
// console.log(res);
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


// ============================================================================================
//

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// // а виводить найбільше (Math використовувати заборонено);
// function sortArgs() {
//     let max = arguments[arguments.length-1];
//     let min = arguments[arguments.length-1];
//     for (let Key in arguments) {
//         if (max<arguments[Key]) {
//             max = arguments[Key];
//         }
//     }
//     for (let Key in arguments) {
//         if (min>arguments[Key]) {
//             min = arguments[Key];
//         }
//     }
//     console.log(max);
//     return min;
// }
// let mini = sortArgs(2,8,2,54,9)
//     console.log(mini);

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// let arrX = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function lock(arr, choise) {
//     let keys = [];
//     let values = [];
//     for (let obj of arr) {
//         for (let objKey in obj) {
//             keys.push(objKey)
//           values.push(obj[objKey]);
//         }
//     }
//     if (choise == 'keys'){
//         return keys;
//     }else if (choise == 'values'){
//         return values;
//     }else{
//         document.write(``)
//     }
// }
// let choise = prompt('Введіть або keys або values', 'keys');
// let task = lock(arrX, choise);
// console.log(task);

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// arr = [1,2,3,4,0];
// function foo(arr,i) {
//     let x = arr.splice(i, 1);
//    arr.splice(i+1,0,x[0]);
//    return arr
// }
// arr = foo(arr, 1);
// console.log(arr);
//
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// let arr = [1,0,0,6,0,34,0,5,3,6,8];
// function foo(arr) {
//     let y = arr.length
//     for (let i = 0; i < y; i++) {
//         if (arr[i] == 0) {
//             let x = arr.splice(i, 1);
//             arr.push(x[0]);
//             i--;
//             y--;
//         }
//     }return arr
// }
// arr = foo(arr);
// console.log(arr);
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//

// - Дано список імен.
// let n1 = '    Harry       Potter   Олегович   '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// function corector(invalid) {
//    let split = invalid.split(' ');
//    let trim = []
//     for (let i = 0; i < split.length; i++) {
//         if (split[i]!==""){
//             trim.push(split[i])
//         }
//     } return  trim.join(' ');
//
// }
// let  valid = corector(n1);
// console.log(valid);
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// ============================================================================================
