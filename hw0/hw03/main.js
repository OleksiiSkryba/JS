// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
//     b) отримує текст з блоку з id "rules"
//     c) замініть текст параграфа з id 'content' на будь-який інший
//     d) замініть текст параграфа з id 'rules' на будь-який інший
//     e) змініть кожному елементу колір фону на червоний
//     f) змініть кожному елементу колір тексту на синій
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//     h) отримати всі елементи з класом fc_rules
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний

// let content = document.getElementById('content');
// content.innerText = 'asdasdasd';
// console.log(content.firstChild);

// let rules = document.getElementById('rules');
// console.log(rules.firstChild);
// rules.style.backgroundColor = 'red';
// rules.style.color = 'blue';
// console.log(rules.classList);



// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let users = [{
//   name: 'vasya',
//   age: 31,
//   status: false,
//   address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//   name: 'petya',
//   age: 30,
//   status: true,
//   address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//   name: 'kolya',
//   age: 29,
//   status: true,
//   address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//   name: 'olya',
//   age: 28,
//   status: false,
//   address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//   name: 'max',
//   age: 30,
//   status: true,
//   address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//   name: 'anya',
//   age: 31,
//   status: false,
//   address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//   name: 'oleg',
//   age: 28,
//   status: false,
//   address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//   name: 'andrey',
//   age: 29,
//   status: true,
//   address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//   name: 'masha',
//   age: 30,
//   status: true,
//   address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//   name: 'olya',
//   age: 31,
//   status: false,
//   address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//   name: 'max',
//   age: 31,
//   status: true,
//   address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];

// for (const user of users) {
//     let div = document.createElement('div');
//     div.innerHTML = `</br><h2>${user.name}</h2>
//     <h3>${user.age} ${user.status}</h3>
//     <p>${user.address.city} ${user.address.country}</br> 
//     ${user.address.street} street ${user.address.houseNumber}</p><hr>`;
//     document.body.appendChild(div);
// };

// ===========================================================================

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
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

let usersWithCities = [];

for (const user of usersWithId) {
    for (const adress of citiesWithId) {
        if(user.id == adress.user_id){
            user.adress=adress;
            usersWithCities.push(user);
        }
    }
}

console.log(usersWithCities);

