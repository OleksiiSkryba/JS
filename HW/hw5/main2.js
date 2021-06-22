
let storeName = JSON.parse(localStorage.getItem('name'));
// console.log(storeName);
let h = document.createElement("h1");
h.innerText = `Hello - ${storeName}`;
document.body.appendChild(h);