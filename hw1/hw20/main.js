// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let buch1 = {
//   titel: "Buch 1",
//   pageCount: 10,
//   genre: "TRASH",
//   autors: [
//     {
//       name: "I",
//       age: 49,
//     },
//     {
//       name: "Ich",
//       age: 50,
//     },
//   ],
// };

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let min = 0;
// if (min > 0 && min < 15) {
//   console.log("1te firtel");
// } else if (min > 15 && min < 30) {
//   console.log("2te firtel");
// } else if (min > 30 && min < 45) {
//   console.log("3te firtel");
// } else {
//   console.log("4te firtel");
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let wohe = [
//   "mondey",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];
// let date = wohe[1];

// switch (date) {
//   case "mondey":
//     console.log("Up1");
//     break;
//   case "tuesday":
//     console.log("Up2");
//     break;
//   case "wednesday":
//     console.log("Up3");
//     break;
//   case "thursday":
//     console.log("Up4");
//     break;
//   case "friday":
//     console.log("Up5");
//     break;
//   case "saturday":
//     console.log("Up6");
//     break;
//   case "sunday":
//     console.log("Up7");
//     break;

//   default:
//     console.log("A-A-A");
// }

// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// console.log(day);

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
// let a = 31;
// let b = 3;
// let x = a - b;

// if (x<0) {
//     console.log("b");
// } else if (x == 0){
//     console.log("a&b");
// } else {
//     console.log("a");
// };

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
// let y = NaN;
// // console.log(y);
// let z = y || "defolt";
// console.log(z);

//  За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// let coursesAndDurationArray = [
//   { title: "JavaScript Complex", monthDuration: 5 },
//   { title: "Java Complex", monthDuration: 6 },
//   { title: "Python Complex", monthDuration: 6 },
//   { title: "QA Complex", monthDuration: 4 },
//   { title: "FullStack", monthDuration: 7 },
//   { title: "Frontend", monthDuration: 4 },
// ];
// let n = +prompt("set number");
// if(coursesAndDurationArray[n].monthDuration>5){
//     console.log('Super!');
// };

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let I = 0; I < 10; I++) {
//     let block = document.createElement('div');
//     block.innerText = "lorem ipsum";
//     document.body.appendChild(block);
//     document.write(`<div> Lorem ipsum ${I}</div>`);
// };
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// i = 0;
// while (i<10) {
//     let n = 1+i;
//     document.write(`<div> Lorem ipsum ${n}</div>`);
//     i++;
// };
// let listOfItems = [
//   "html",
//   "css",
//   "javascript",
//   "mysql",
//   "mongodb",
//   "react",
//   "angular",
//   "node.js",
// ];

// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>

// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
// let ul = document.createElement('ul');

// for (const l of listOfItems) {
//     let li = document.createElement("li");
//     li.innerText = l;
// // ul.innerHTML = "<li>asd</li>";
//     ul.appendChild(li);
// }
//         document.write(`<ul>`);
// for (let index = 0; index < listOfItems.length; index++) {
//     const element = listOfItems[index];
//         // let li = document.createElement("li");
//         // li.innerText = element;
//         // ul.appendChild(li);
//         // document.body.appendChild(li);
//         document.write(`<li>${element}</li>`)
// }
//         document.write(`</ul>`);
// -----------------------------------------------

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];

// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

// document.write(`<ul>`);
// for (let index = 0; index < products.length; index++) {
//     const element = products[index];
//         document.write(`<li>
//              <div class="product-card">
//                      <h3 class="product-title">${element.title}. Price - ${element.price}</h3>
//                      <img src="${element.image}" alt="" class="product-image">
//              </div>
//             </li>`)
// }
//         document.write(`</ul>`);

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function sqwer(a,b) {
//     return a*b
// }
// console.log(sqwer(2,3));

// - створити функцію яка повертає найменьше число з масиву
// function min(arr = []) {
//     arr.sort((a,b)=>a-b);
//     return arr[0];
// }
// let array = [2,4,6,2,5,1,8];
// console.log(min(array));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(arr = []) {
//    let summa = arr.reduce((a,b)=>a+b);
//    return summa;
// }
// console.log(sum(array));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr,index1,index2){
//     let num1 = arr[index1];
//     let num2 = arr[index2];
//     arr[index1] = num2;
//     arr[index2] = num1;
//     return arr;
// }
// console.log(swap(array,3,5));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// current currency = текущая валюта
// required currency = необходимая валюта
// exchange rate = курс валют

// let rete = {
//   UAH:{
//     EUR:6,
//     USD:5
//   },
//   EUR:{
//     UAH:4,
//     USD:3
//   },
//   USD:{
//     UAH:2,
//     EUR:1
//   }
// };
// function exchange(sum,currentCurrency,requiredCurrency) {
// for (const current in rete) {
//   if (current == currentCurrency) {
//     for (const required in rete[current]) {
//       if (required == requiredCurrency) {
//     let result = sum*rete[current][required];
// return `${sum}${currentCurrency} = ${result}${requiredCurrency}`;
//       }
//     }
//   }
// }
// }

// console.log(exchange(5,'UAH','EUR'));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';

// console.log(str.split(" "));

// - є масив чисел
// let nam = [10,8,-7,55,987,-1011,0,1050,0];
// . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let str = nam.map((a)=> a.toString());
//     console.log(str);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// function sortNums(arr,direction) {
//   if (direction=='ascending') {
//     return console.log(arr.sort((a,b)=>a-b));
//   } else if (direction=='descending') {
//       return console.log(arr.sort((a,b)=>b-a));
//   } else return console.log("error");
// }

//     let nums = [11,21,3];
//     sortNums(nums,'ascending') // [3,11,21]
//     sortNums(nums,'descending') // [21,11,3]

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// console.log(coursesAndDurationArray.sort((a,b)=> b.monthDuration - a.monthDuration));
// console.log(coursesAndDurationArray.filter((a)=> a.monthDuration>5));
// function mitId(item) {
//   item.id=n+1;
//   return item;
// }
//  n=0;
// console.log(coursesAndDurationArray.map(mitId));
//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// ♥ ♠ ♦ ♣
//
// =========================
let value = {
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  ace: "A",
  queen: "Q",
  jack: "J",
  king: "K",
};

let cards = {
  suit: {
    spade: {
      color: "black",
      symbol: "♣",
      value: value,
    },
    diamond: {
      color: "red",
      symbol: "♦",
      value: value,
    },
    heart: {
      color: "red",
      symbol: "♥",
      value: value,
    },
    clubs: {
      color: "black",
      symbol: "♠",
      value: value,
    },
  },
};
// console.log(`${cards.suit.clubs.color}${cards.suit.clubs.symbol}${cards.suit.clubs.value.ace}`);
document.write(
  `<span style="color:${cards.suit.clubs.color};">${cards.suit.clubs.symbol}${cards.suit.clubs.value.ace}</span>`
);
document.write(
  `<span style="color:${cards.suit.heart.color};">${cards.suit.heart.symbol}${cards.suit.heart.value.queen}</span>`
);

// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
  {
    title: "JavaScript Complex",
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
    ],
  },
  {
    title: "Java Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "java core",
      "java advanced",
    ],
  },
  {
    title: "Python Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "python core",
      "python advanced",
    ],
  },
  {
    title: "QA Complex",
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "QA/QC",
    ],
  },
  {
    title: "FullStack",
    monthDuration: 7,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
      "python",
      "java",
    ],
  },
  {
    title: "Frontend",
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "sass",
    ],
  },
];
let mitSass = [];
let mitDocker = [];
for (const curs of coursesArray) {
  // curs.modules.includes('sass')?mitSass.push(curs)
  if (curs.modules.includes("sass")) {
    mitSass.push(curs);
  }
  if (curs.modules.includes("docker")) {
    mitDocker.push(curs);
  }
}

// console.log(mitSass, mitDocker);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let users = [];
for (let I = 0; I < 10; I++) {
  const user = new User(I + 1, "N", "SN", "E", "N");
  users.push(user);
}
// console.log(users.sort((a,b)=>b.id-a.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//   constructor(id, name, surname, email, phone, order = []) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//   }
// }

class Client extends User {
  constructor(id, name, surname, email, phone, order = []) {
    super(id, name, surname, email, phone)
    this.order = order;
  }
};

let vasia = new Client(11, "Vasia", "Pupkin", "aaa@bbb", 111, ["a", "b", "c"]);
console.log(vasia);

// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
  constructor(model, dev, year, speed, value) {
    this.model = model;
    this.dev = dev;
    this.year = year;
    this.speed = speed;
    this.value = value;
  }
  drive() {
    console.log(`їдемо зі швидкістю ${this.speed} на годину`);
  }
  info() {
    console.log(
    `model - ${this.model}, 
     developer - ${this.dev}, 
     year - ${this.year}, 
     speed - ${this.speed}, 
     value - ${this.value}`
    );
  }
  increaseMaxSpeed (newSpeed){
    this.speed += newSpeed
  }
  changeYear (newValue){
    this.year = newValue
  }
  addDriver(name,staz){
    this.driver = {};
    this.driver.name = name;
    this.driver.staz = staz;
  }
}
let oka = new Car('Oka','Belaz',1814,7,0.5);
oka.addDriver('Vasia',15);
// console.log(oka);
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let s = (a,b)=>a*b;
// console.log(s(2,3));
 
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let block = document.createElement('div');
// block.className = "wrap collapse alpha beta";
// block.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
// block.style.backgroundColor = "red";
// document.body.appendChild(block);
// // console.log(block.classList);
// let block1 = block.cloneNode(true);
// block1.style.backgroundColor = "green";
// document.body.appendChild(block1);

// - Є масив:
let arr = ['Main','Products','About us','Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let ul = document.createElement('ul');
// for (const i of arr) {
//   let li = document.createElement('li');
//   li.innerText = i;
//   ul.appendChild(li);
// }
// document.body.appendChild(ul);

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

// ==========================
let div = document.createElement('div');
for (const i of coursesAndDurationArray) {
  let item = document.createElement('div');
  item.className = "item";
  let h1 = document.createElement('h1');
  h1.className = "heading";
  let p = document.createElement('p');
  p.className = "description";
  h1.innerText = i.title;
  p.innerText = i.monthDuration;
  item.appendChild(h1);
  item.appendChild(p);
  div.appendChild(item);
}
document.body.appendChild(div);
