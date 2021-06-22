// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let mainHeader = document.getElementById('main_header');
mainHeader.innerText = 'apr-2021-tuesday';

// b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul');
// for (const ulElement of ul) {
//     ulElement.style.width = '400px';
// }; or
ul[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
let text = listElement2[0].textContent;
// console.log(text);

// e) отримує всі елементи li та змінює ім колір фону на сірий
let li = document.getElementsByTagName('li');
for (const liElement of li) {
    liElement.style.backgroundColor = 'silver';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let a = document.getElementsByTagName("a");
for (const aElement of a) {
    aElement.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
for (const element of a) {
    if (element.textContent == 'link3'){
        element.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const aElement of a) {
    let className = aElement.textContent;
    aElement.classList.add(className);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let color = prompt('Оберіть колір(англійською)', 'green');
let subHeader = document.getElementsByClassName('sub-header');
// for (const subHeaderElement of subHeader) {
//     subHeaderElement.style.backgroundColor = color;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// for (const subHeaderElement of subHeader) {
//     if (subHeaderElement.textContent == 'content 2 segment'){
//         subHeaderElement.style.color = color;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let userText = prompt('Напишить щось', 'Lorem ipsum!');
// let content_1 = document.getElementsByClassName('content_1');
// for (const content1Element of content_1) {
//     content1Element.innerText = userText;
// }

// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName("p");
for (const pElement of p) {
    pElement.style.padding = "20px";
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// let text2 = document.getElementsByClassName('text2');
// for (const text2Element of text2) {
//     text2Element.innerText = 'apr-2021-tuesday';
// }

//
// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
let form0 = document.createElement('form');
form0.action = "index2.html";
let label = document.createElement('label');
label.innerText = "Напишить Ваше Ім'я";
let input0 = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = 'Sand';
btn.onclick = (ev) => {
    // ev.preventDefault();
    let userName = JSON.stringify(input0.value);
    localStorage.setItem('name', userName);
        // let userName = input0.value;
    console.log(userName);
    input0.value = '';
    // ev.action="index2.html";
}
form0.appendChild(label);
form0.appendChild(input0);
form0.appendChild(btn);
document.body.appendChild(form0);

//
// 3. Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//
let form1 = document.createElement('form');
form1.action = "index2.html";
let label1 = document.createElement('label');
label1.innerText = "Додайте опис товару";
let input1 = document.createElement('input');
input1.required =true;
input1.placeholder = 'назва товару';
let input2 = document.createElement('input');
input2.required =true;
input2.placeholder ='кількість товару';
let input3 = document.createElement('input');
input3.required =true;
input3.placeholder = 'ціна товару';
let input4 = document.createElement('input');
input4.required =true;
input4.placeholder = 'картинка товару (посилання з інтернету)';
let btn1 = document.createElement('button');
btn1.innerText = 'Sand';
let order;
localStorage.getItem(`localOrder`) ? order = JSON.parse(localStorage.getItem(`localOrder`)) : order = 0;

btn1.onclick = (ev) => {
    ev.preventDefault();

    let product = [];
    product[0] = input1.value;
    product[1] = input2.value;
    product[2] = input3.value;
    product[3] = input4.value;
    let productValue =JSON.stringify(product);
    let key = `product_`+order;
    localStorage.setItem( key, productValue);
    order +=1;
    localStorage.setItem(`localOrder`, JSON.stringify(order));
    console.log(order);
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
    product = [];
}
form1.appendChild(label1);
form1.appendChild(input1);
form1.appendChild(input2);
form1.appendChild(input3);
form1.appendChild(input4);
form1.appendChild(btn1);
let anhor = document.createElement('div');
anhor.innerHTML = "<a href='list.html'>Сторінка товарів</a>";
document.body.appendChild(form1);
document.body.appendChild(anhor);


//
//     ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
