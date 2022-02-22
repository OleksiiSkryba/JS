function look(arr) {
    console.log(arr);
};

let arrr = [0, 1, 2, 3, 4, 5];

// look(arrr);

function randomArr(array) {
    let rndArr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        rndArr.push(Math.floor(Math.random()*10));
    }  
    look(rndArr);
};

// randomArr(arrr);

function min(a, b, c) {
    a<b&a<c?console.log(a):b<a&b<c?console.log(b):console.log(c);
}

// min(2, 8, 5);

function max(a, b, c) {
    a>b&a>c?console.log(a):b>a&b>c?console.log(b):console.log(c);
}

// max(8, 13, 7);

function minOfArr(arr = []) {
    arr.sort((a, b) => a-b);
    console.log(arr[0]);
}
function maxOfArr(arr = []) {
    arr.sort((a, b) => b-a);
    console.log(arr[0]);
}
// minOfArr(arrr);
// maxOfArr(arrr);

function sum(arr = []) {
    summa = 0;
    for (const i of arr) {
        summa += i;
    }
    //console.log(summa);
    return summa;
}
// console.log(sum(arrr));


function mid(arr = []) {
    let middle = sum(arr)/arr.length
    return middle
}

// console.log(mid(arrr));

let example = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function keys(arr = []) {
    let keysArr = [];
    for (const i of arr) {
        for (const key in i) {
                keysArr.push(key);
        }
    }
    return keysArr;
}

// console.log(keys(example));

function values(arr = []) {
    let valuesArr = [];
    for (const i of arr) {
        for (const key in i) {
                valuesArr.push(i[key]);
        }
    }
    return valuesArr;
}

// console.log(values(example));

let arrNum = [1,2,3,4,5,6,7];

function arrSum(arr1, arr2) {
    let arr = [];
if(arr1.length>arr2.length){
     for (let i = 0; i < arr1.length; i++) {
        if(arr2[i] == undefined){
         arr2[i] = 0;
        }
  arr.push(arr1[i]+arr2[i]);
    }
} else { 
    for (let i = 0; i < arr2.length; i++) {
        if(arr1[i] == undefined){
         arr1[i] = 0;
        }
  arr.push(arr2[i]+arr1[i]);
}
}
    return arr;
}

let nums = arrSum(arrr, arrNum);
// console.log(nums);


function argsSort() {
    let arr = [];
    for (const i of arguments) {
        arr.push(i);
    }
    let sorted = arr.sort((a, b) => a-b);
    console.log(sorted[sorted.length-1]);
    return sorted[0];
}

// let mini = argsSort(5,2,7,1,9,3);
// console.log(mini);


let arrs = [0, 1, 2, 0, 3, 4, 5];

function splits(arr = [], i) {
    let x = arr.splice(i, 1);
    arr.splice(i+1, 0, x[0]);
    console.log(arr);
}

// splits(arrs, 2);

function babl(arr = []) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(arr[i] == 0){
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    console.log(arr);
}

// babl(arrs);


let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '

function trims(name = '') {
    let arr = name.split(' ');
    let trimArr = [];

    for (const i of arr) {
        i?trimArr.push(i):false
    }
    let trimName = trimArr.join(' ');
    console.log(`--${trimName}--`);
}

trims(n3);

let text = "Hello owu";


function adder(iner, el) {
    let blok = document.createElement(el);
blok.innerText = iner;
document.body.appendChild(blok);
console.log(blok);
}

// adder(text, 'h1');

