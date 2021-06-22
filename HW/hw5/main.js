
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// a) отримує текст з параграфа з id "content"
let content = document.getElementById('content');
let text = content.textContent;
// console.log(text);
//
// let p = document.getElementsByTagName('p');
// let ptext = p[0].textContent;
// console.log(ptext);

// b) отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
let t = rules.textContent;
// console.log(t);

// c) замініть текст параграфа з id 'content' на будь-який інший
let str = 'Vasia Pupkin';
// content.innerText = str;

// d) замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = str;

// e) змініть кожному елементу колір фону на червоний
content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';

// f) змініть кожному елементу колір тексту на синій
content.style.color = 'blue';
rules.style.color = 'blue';

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rules.classList.value);

// h) отримати всі елементи з класом fc_rules
let fc_rules = document.getElementsByClassName('fc_rules');

// i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (let fcRule of fc_rules) {
    fcRule.style.color = 'red'
}