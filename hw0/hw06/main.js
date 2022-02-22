let numArr = [-2, 0, 800, 3.14, 1, 2, 3, 44, 34, 24, 4, 17, 7, 9, 14, -2.8, 74.73, 0.5];
// numArr.sort(function(a, b) {
//     return a - b;
  // });
  // console.log(numArr);
  
  // numArr.sort(function(a, b) {
  //   return b - a;
  // });
  // console.log(numArr);

  function crat(arr, num) {
    let arrCrat = [];
    for(let value of arr) {
      value%num==0?arrCrat.push(value):false;
    }
    return arrCrat;
  }

  let socrat = crat(numArr, 3);
  // console.log(socrat);


  let bigNum = numArr.filter(num => num > 10);
  // console.log(bigNum);

// numArr.forEach(num => document.write(`
// <div>${num}</div><hr>
// `));

let bigNums = numArr.map(num => num*3);
// console.log(bigNums);

const initialValue = 0;
const sumWithInitial = numArr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
//   console.log(sumWithInitial);

const words = ['a', 'b', 'c', 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let bigWords = words.filter(word => word.length>4);
// console.log(bigWords);

let longArr = words.map(word => `Sam says ${word}`);
// console.log(longArr);

const users = [
  {name: 'vasya', age: 31, isMarried: false},
  {name: 'petya', age: 30, isMarried: true},
  {name: 'kolya', age: 29, isMarried: true},
  {name: 'olya', age: 28, isMarried: false},
  {name: 'max', age: 30, isMarried: true},
  {name: 'anya', age: 31, isMarried: false},
  {name: 'oleg', age: 28, isMarried: false},
  {name: 'andrey', age: 29, isMarried: true},
  {name: 'masha', age: 30, isMarried: true},
  {name: 'olya', age: 31, isMarried: false},
  {name: 'max', age: 31, isMarried: true}
];

// users.sort((a, b) => a.age - b.age);
// console.log(users);

let usersWithId = users.map(user => user.id = Math.floor(Math.random()*100));
// console.log(users);

 let usersMarried = users.filter(user => user.isMarried);
  usersMarried.map(user => user.isFlat=true);
//  console.log(usersWithFlat);
//  console.log(usersMarried);

 const cars = [
  {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
  {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
  {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
  {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
  {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
  {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
  {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
  {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
  {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
  {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
  {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
  {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
  {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];

//- сили більше ніж 300 + виробник субару + мотор серіі ej


let subCars = cars.filter(car => car.power>300&&car.producer=="subaru"&&car.engine.startsWith('ej'));
// console.log(subCars);


const usersWithAddress = [
  {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
  {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
  {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
  {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
  {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
  {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
  {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
  {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
  {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
  {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
  {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// console.log(usersWithAddress);
//-- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)

const oldMarried = usersWithAddress.reduce((total, user) => {
user.isMarried&&user.age>=30?user.child={id:0, name: 'x', age:0} && total.push(user):false;
return total;
},[]);
console.log(usersWithAddress);
console.log(oldMarried);

function increment(input) { return input + 1;}
function decrement(input) { return input - 1;}
function double(input) { return input * 2; }
function halve(input) { return input / 2; }

let pipeline = [increment, double, decrement];
const result = pipeline.reduce(function(total, func) {
  return func(total);
}, 1);
// result // 3