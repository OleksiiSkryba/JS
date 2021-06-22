// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// let round = document.createElement("div");
// round.style.height = '100px';
// round.style.width = '100px';
// round.style.borderRadius = '30%';
// round.style.backgroundColor = 'black';
// let btn = document.createElement("button");
// btn.innerText = 'HIDE';
// btn.style.margin = '25px';
// btn.onclick = (ev) => {
//     ev.preventDefault();
//     round.style.display ='none';
// }
// document.body.appendChild(round);
// document.body.appendChild(btn);
//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// let btn1 = document.createElement("button");
// btn1.innerText = 'HIDE ME';
// btn1.style.margin = '25px';
// btn1.onclick = (ev) => {
//     ev.preventDefault();
//     btn1.style.display ='none';
// }
// document.body.appendChild(btn1);

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// let input = document.createElement("input");
// input.type = "number";
// input.placeholder ="Введіть Ваш вік";
// let btn2 = document.createElement("button");
// btn2.innerText = "SEND";
// btn2.onclick = (ev) => {
//     ev.preventDefault();
//     if (+input.value < 18){
//         alert("Підрости!");
//     }
//    }
// document.body.appendChild(input);
// document.body.appendChild(btn2);

// - Створіть меню, яке розгортається/згортається при клику
// let ul = document.createElement("ul");
// ul.style.backgroundColor = "silver";
// ul.style.padding = "50px";
// let li0 = document.createElement("li");
// li0.innerText = "LI1";
// let li1 = document.createElement("li");
// li1.innerText = "LI2";
// let li2 = document.createElement("li");
// li2.innerText = "LI3";
// ul.appendChild(li0);
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.onclick = (ev) => {
//     ev.preventDefault();
//     // console.log(ul.childNodes);
//     for (let li of ul.childNodes) {
//         li.style.display==="none"?li.style.display="list-item":li.style.display="none";
//     }
// }
// document.body.appendChild(ul);

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
// let coments = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
// for (let coment of coments) {
//     let comDiv = document.createElement("div");
//     let {title, body} = coment;
//     let h2 = document.createElement("h2");
//     h2.innerText = title;
//     let com = document.createElement("p");
//     com.innerText = body;
//     let btn = document.createElement("button");
//     btn.innerText = "ЗГОРНУТИ";
//     btn.onclick = (ev) => {
//         ev.preventDefault();
//         com.style.display !== "none" ? com.style.display = "none" : com.style.display = "block";
//     }
//     comDiv.innerHTML = `<hr>`;
//     comDiv.appendChild(h2);
//     comDiv.appendChild(com);
//     comDiv.appendChild(btn);
//     document.body.appendChild(comDiv);
//     }
//     Додайте кожному коментарю по кнопці для згортання його body.


// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується
//   та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let form0 = document.createElement("form");
// form0.style.margin = "10px";
// let label0 = document.createElement("label");
// label0.innerText = "User 1";
// let form1 = document.createElement("form");
// form1.style.margin = "10px";
// let label1 = document.createElement("label");
// label1.innerText = "User 2";
// let input0 = document.createElement("input");
// input0.name = "name0";
// input0.placeholder = "inter your name";
// let input1 = document.createElement("input");
// input1.placeholder = "inter your surname";
// let input2 = document.createElement("input");
// input2.placeholder = "inter your name";
// let input3 = document.createElement("input");
// input3.placeholder = "inter your surname";
// let btn = document.createElement("button");
// btn.innerText ="SEND"
// btn.style.margin = "20px";
// btn.onclick = ev => {
//     ev.preventDefault();
//     console.log(`user 1 name - ${document.forms[0][0].value}`);
//     console.log(`user 1 surname - ${document.forms[0][1].value}`);
//     console.log(`user 2 name - ${document.forms[1][0].value}`);
//     console.log(`user 2 surname - ${document.forms[1][1].value}`);
// }
// form0.appendChild(label0);
// form0.appendChild(input0);
// form0.appendChild(input1);
// form1.appendChild(label1);
// form1.appendChild(input2);
// form1.appendChild(input3);
// document.body.appendChild(form0);
// document.body.appendChild(form1);
// document.body.appendChild(btn);

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// let div = document.createElement("div");
// document.body.appendChild(div);
// function createTable(rows, cols, element){
//     let table = document.createElement("table");
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement("tr");
//         for (let j = 0; j < cols; j++) {
//             let td = document.createElement("td");
//             td.style.width = "50px";
//             td.style.height = "30px";
//             tr.appendChild(td);
//         }
//         i%2 === 0 ? tr.style.backgroundColor = "green" : tr.style.backgroundColor = "blue";
//         table.appendChild(tr);
//     }
//     element.appendChild(table);
// }
// createTable(3,5,div);


// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

let tape = document.createElement("div");
tape.style.height = "100%";
tape.style.display = "flex";
// tape.style.alignItems = "center";
tape.style.overflowX = "auto";

let screen = document.createElement("div");
screen.style.boxSizing = "border-box";
screen.style.height = '512px';
screen.style.width = '720px';
screen.style.backgroundColor = "silver";
screen.style.breakAfter = "img/angle-left.svg"

let left = document.createElement("div");
left.style.backgroundImage = "";
left.style.position = "fixed";
left.style.left = "20px";
left.style.top = "50%";

let right = document.createElement("div");
right.style.backgroundImage = "img.angle-right.svg";
right.style.position = "fixed";
right.style.right = "20px";
right.style.top ="50%";

screen.appendChild(tape);
screen.appendChild(left);
screen.appendChild(right);


    fetch('https://api.thecatapi.com/v1/images/search?limit=9&mime_types=&order=Random&size=small&page=0&category_ids=1&sub_id=demo-6b4a59')
        .then(response => response.json())
        .then(data => {

            for (let datum of data) {
                let slide = document.createElement("div");
                slide.style.display = "flex";
                slide.style.height = '512px';
                slide.style.minWidth = '720px';
                slide.style.justifyContent = "center";
                slide.style.alignItems = 'center';

                let img = document.createElement("img");
                // img.style.margin = "60px";
                img.height = datum.height;
                img.width = datum.width;
                img.src = datum.url;
                img.style.overflow = "hidden";

                slide.appendChild(img);
                tape.appendChild(slide);

            }
        })
        .catch(error => console.log('error', error));



document.body.appendChild(screen);

//
//
//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
// -- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ