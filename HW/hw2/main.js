// --створити масив з:
//     - з 5 числових значень
let arrNum = [0,1,2,3,4];
// - з 5 стічкових значень
let arrStr = ['a','b','c','d','e'];
// - з 5 значень стрічкового, числового та булевого типу
let arr = [0,'a',1,'b',2];
// - та вивести його в консоль
// console.log(arr);
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr0 = [];
// arr0[0] = 'a';
// arr0[1] = 'b';
// arr0[2] = 'c';
// console.log(arr0);
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let lorem = 'Lorem ipsum dolor sit amet.';
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> ${lorem} </div>`);
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> ${lorem} - ${i} </div>`);
//}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20){
//     document.write(`<h1> ${lorem} </h1>`);
// i++;
// };
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20){
//     document.write(`<h1> ${lorem} - ${i} </h1>`);
//     i++;
// };
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr10 = [0,1,2,3,4,5,6,7,8,9];
// for (const arr10Key of arr10) {
//     console.log(arr10Key);
// };
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr10str = ['a','b','c','d','e','f','g','h','j','k'];
// for (const arr10Key of arr10str) {
//     console.log(arr10Key);
// };
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let numStr = ['a','b','c','d','e',1,2,3,4,5];
// for (const Key of numStr) {
//     console.log(Key);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let boolNumStr = ['a','b','c','d',1,2,3,4,true,false];
//  for (const Key of boolNumStr) {
//      if (typeof Key == "boolean"){
//          console.log(Key);
//      }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
// for (const Key of boolNumStr) {
//     if (typeof Key == "number"){
//         console.log(Key);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
// for (const Key of boolNumStr) {
//     if (typeof Key == "string"){
//         console.log(Key);
//     }
// }
//
// - Створити порожній масив.
// Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let arr00 = [];
// arr00[0] = 'a';
// arr00[1] = 'b';
// arr00[2] = 'c';
// arr00[3] = 'd';
// arr00[4] = 1;
// arr00[5] = 2;
// arr00[6] = 3;
// arr00[7] = 4;
// arr00[8] = true;
// arr00[9] = false;
// for (const Key of arr00) {
//     console.log(Key);
// }
// - Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i+1);
//     document.write(`${i+1}<br/>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i+1);
//     document.write(`${i+1}<br/>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 200; i= i+2) {
//     console.log(i/2+1);
//     document.write(`${i/2+1}<br/>`)
// }
// - Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i%2 == 0){
//         console.log(i);
//         document.write(`${i}<br/>`)
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i%2 !== 0){
//         console.log(i);
//         document.write(`${i}<br/>`)
//     }
// }
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

    // for (let m = 0; m < 2; m++) {
    //     for (let s = 0; s < 60; s++) {
    //     console.log(m,' хвилин ', s, ' секунд ');
    //  }
    // }
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let h = 0; h < 2; h++) {
//     for (let m = 0; m < 60; m++) {
//         for (let s = 0; s < 60; s++) {
//             console.log(h, 'годин', m, ' хвилин ', s, ' секунд ');
//         }
//     }
//         for (let m = 0; m < 20; m++) {
//             for (let s = 0; s < 60; s++) {
//                 console.log('2 години', m, ' хвилин ', s, ' секунд ');
//             }
//         }
//     }
// або

// for (let h = 0; h < 3; h++)
//     for (let m = 0; m < 60; m++) {
//         if (h == 2 && m == 20) {
//             console.log('2 години 20 хвилин Finish!')
//             break;
//         }
//     for (let s = 0; s < 60; s++) {
//         console.log(h,' годин ', m, ' хвилин ', s, ' секунд ');
//     }
//   }

////     ______________________________________________________________________________________________________________________________________________________
// // Додатково
// // ______________________________________________________________________________________________________________________________________________________
// //
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let str = [ 'a', 'b', 'c'];
let word = '';
// for (let i = 0; i < str.length; i++) {
//     word += str[i];
// }
// console.log(word);
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// i = 0;
// while (i < str.length){
//     word += str[i];
//     i++;
// }
// console.log(word);
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// for (const i of str) {
//     word += i;
// }
// console.log(word);
//
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let str1 = [ 'a', 'b', 'c'];
// for (let i = 1; i <= 3; i++) {
//     str1.push(i);
// }
// console.log(str1);
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let num1 = [1, 2, 3];
let num2 = [];
// for (let i = 1; i <= num1.length; i++) {
//    num2.push(num1[num1.length-i])
// }
// console.log(num1);
// console.log(num2);
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// num1.push(4);
// num1.push(5);
// num1.push(6);
// console.log(num1);
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// num1.unshift(6);
// num1.unshift(5);
// num1.unshift(4);
// console.log(num1);
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let leng = ['js', 'css', 'jq'];
// document.write(leng.shift(0))
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// document.write(leng.pop(0))
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
let num3 = [1, 2, 3, 4, 5];
// num3.splice(0, 3);
// console.log(num3);
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// num3.splice(2, 3);
// console.log(num3);
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// num3.splice(3, 0, 'a', 'b', 'c');
// console.log(num3);
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище.
// num3.splice(1, 0, 'a', 'b');
// let n = num3.splice(6, 1, 'c', 'e');
// num3.splice(7, 0, n[0]);
// console.log(num3);
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr10x = [0,1,2,3,4,5,6,7,8,9];
// for (const n of arr10x) {
//     if (n % 2 == 0){
//         console.log(n)
//        }
//     }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let arrN = [];
// for (let i = 0; i < arr10x.length; i++) {
//     arrN.push(arr10x[i])
// }
// або
// for (const n of arr10x) {
//     arrN.push(n)
// }
// або
// arrN.push(...arr10x);
// console.log(arrN);
// - Взяти масив з 10 чисел або створити його.
// Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
let nums = [2,17,13,6,22,31,45,66,100,-18];
// i = 0;
// while (i<nums.length){
//     console.log(nums[i]);
//     i++
// }
//     2. перебрати його циклом for
// for (const num of nums) {
//     console.log(num);
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// i = 0;
// while (i<nums.length){
//     if (i%2!==0)
//     console.log(nums[i]);
//     i++
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let j = 0; j < nums.length; j++) {
//         if (j%2!==0)
//     console.log(nums[j]);
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// i = 0;
// while (i<nums.length){
//     if (nums[i]%2==0)
//     console.log(nums[i]);
//     i++
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (const num of nums) {
//     if (num%2==0)
//         console.log(num);
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let num = 0; num<nums.length; num++) {
//     if (nums[num]%3==0){
//         nums[num]="okten"
//     }
// }
// console.log(nums);
// 8. вивести масив в зворотньому порядку.
// for (let i = nums.length-1; i >= 0 ; i--) {
//     console.log(nums[i]);
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
//
//
// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let rand = [];
for (let i = 0; i < 20; i++) {
    rand.push(8 + Math.round(Math.random()*(732-8)))
}
console.log(rand);
// 2. Вивести за допомогою console.log кожен третій елемен
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArr = [];
// for (let i = 0; i < rand.length; i++) {
//     if ( i==0&&rand[0]%2==0||i%3==0&&rand[i]%2==0){
//         console.log(rand[i])
//         newArr.push(rand[i])
//     }
// }
// console.log(newArr);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// for (let i = 1; i < rand.length; i++) {
//     if (rand[i]%2==0){
//         console.log(rand[i - 1]);
//     }
// }
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let basket = [100,250,50,168,120,345,188];
// let prise = 0;
// for (const number of basket) {
//     prise += number;
// }
// let midPrise = prise/basket.length
// console.log(midPrise);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

for (let user of usersWithId) {
    for (let adress of citiesWithId)
        if (user.id === adress.user_id) {
            user.country = adress.country;
            user.city = adress.city;
    }
}
console.log(usersWithId);