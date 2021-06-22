
// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// let  vasia = new User(1,'Vasia','Pupkin','vasia@gmail.com', 223322);
// console.log(vasia);
// створити пустий масив, наповнити його 10 об'єктами User
let users = [];
for (let i = 0; i < 10; i++) {
    users.push(new User(i+1,'','','',''));
}
// console.log(users);

// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order ' +
// '(поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order = []) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
    }
}
// let  vasia = new Client(1,'Vasia','Pupkin','vasia@gmail.com', 223322,  ['butter','bread','water']);
// console.log(vasia);
// // створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];
// for (let i = 0; i < 10; i++) {
//     clients.push(new Client(i+1,'','','','',[]));
// }
// console.log(clients);



//
// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car,' +
// ' з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// function Car(model, producer, year, speed, capacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.speed = speed;
//         this.capacity = capacity;
//
//     this.drive = () => {
//         console.log(`їдемо зі швидкістю ${this.speed} km на годину`);
//     };
//     this.info = () => {
//         console.log(`модель - ${this.model}`);
//         console.log(`виробник - ${this.producer}`);
//         console.log(`рік випуску - ${this.year}`);
//         console.log(`максимальна швидкість ${this.speed} km на годину`);
//         console.log(`об'єм двигуна - ${this.capacity} літрів`);
//     }
//     this.increaseMaxSpeed = (newSpeed) => {
//         this.speed = this.speed+newSpeed;
//     }
//     this.changeYear = (newValue) => {
//         this.year = newValue;
//     }
//     this.addDriver = (id, name, surname, email, phone) => {
//         this.driver = {};
// this.driver.id = id;
// this.driver.name = name;
// this.driver.surname = surname;
// this.driver.email = email;
// this.driver.phone = phone;
//     }
// }
// let kolo = new Car('Desna', 'Ukraina', 2021, 15, .5);
// kolo.addDriver(1,'Vasia','Pupkin','vasia@gmail.com', 223322);
// console.log(kolo);


//
// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// class Car {
//     constructor(model, producer, year, speed, capacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.speed = speed;
//         this.capacity = capacity;
//     }
//         drive = () => {
//         console.log(`їдемо зі швидкістю ${this.speed} km на годину`);
//     };
//     info = () => {
//         console.log(`модель - ${this.model}`);
//         console.log(`виробник - ${this.producer}`);
//         console.log(`рік випуску - ${this.year}`);
//         console.log(`максимальна швидкість ${this.speed} km на годину`);
//         console.log(`об'єм двигуна - ${this.capacity} літрів`);
//     }
//     increaseMaxSpeed = (newSpeed) => {
//         this.speed = this.speed+newSpeed;
//     }
//     changeYear = (newValue) => {
//         this.year = newValue;
//     }
//     addDriver = (id, name, surname, email, phone) => {
//         this.driver = {};
// this.driver.id = id;
// this.driver.name = name;
// this.driver.surname = surname;
// this.driver.email = email;
// this.driver.phone = phone;
//     }
// }
// let kolo = new Car('Desna', 'Ukraina', 2021, 15, .5);
// kolo.addDriver(1,'Vasia','Pupkin','vasia@gmail.com', 223322);
// console.log(kolo);

//
// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// let pair = [];
// for (let user of users) {
//     if (user.id%2==0){
//       pair.push(user);
//     }
// }
// console.log(pair);

// - Відсортувати його по id. по зростанню
// for (let user of users) {
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].id > users[+i].id){
//             let big = users.splice(i,1,);
//             users.splice(i+1, 0, big)
//         }
//     }
// }
// console.log(users);

// - Відсортувати його по id. по спаданню
// for (let user of users) {
//     let prev = 0;
//     for (let i = 1; i < users.length; i++) {
//         if (users[i].id > users[prev].id ){
//             let s = users.splice(prev,1,);
//             users.splice(prev+1, 0, s[0]);
//         }
//         prev = i;
//     }
// }
// console.log(users);


//
// 6. Взяти масив з завдання 2.
// Відсортувати його по кількості товарів в полі order. по спаданню
// clients.push(new Client(1,'Vasia','Pupkin','vasia@gmail.com', 223322,  ['butter','bread','water','milk','solt'] ));
// clients.push(new Client(2,'Vasia','Pupkin','vasia@gmail.com', 223322,  ['bread','water']));
// clients.push(new Client(3,'Vasia','Pupkin','vasia@gmail.com', 223322,  ['butter']));
// clients.push(new Client(4,'Vasia','Pupkin','vasia@gmail.com', 223322,  ['butter','bread','water', 'milk']));
// clients.push(new Client(5,'Vasia','Pupkin','vasia@gmail.com', 223322,  ['butter','bread','water',' ','milk','solt','cukor','beer']));
// clients.push(new Client(6,'Vasia','Pupkin','vasia@gmail.com', 223322,  []));
// clients.push(new Client(7,'Vasia','Pupkin','vasia@gmail.com', 223322,  ['butter','bread','water',' ','milk','solt']));
// clients.push(new Client(8,'Vasia','Pupkin','vasia@gmail.com', 223322,  ['butter','bread','water',' ','milk','solt','cukor']));
// clients.push(new Client(9,'Vasia','Pupkin','vasia@gmail.com', 223322,  ['butter','bread','water']));
// clients.push(new Client(10,'Vasia','Pupkin','vasia@gmail.com', 223322,  ['butter','bread','water',' ','milk','solt','cukor','beer','chise']));
//
//
// for (let client of clients) {
//     pre = 0;
//     for (let i = 1; i < clients.length; i++) {
//         if (clients[i].order.length < clients[pre].order.length){
//             let big = clients.splice(pre, 1);
//             clients.splice(pre+1, 0, big[0]);
//         }
//         pre = i;
//     }
// }
// console.log(clients);