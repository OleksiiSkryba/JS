// let arr = [1,'a',true,2, 'b'];

// function arrLog(arr = []) {
//     console.log(arr);
// }
// arrLog(arr);

// function randArr(n) {
//     i=0;
//     let arr = [];
//     while (i<n) {
//         arr.push(
//          Math.random()*10
//         )
//         i++
//     }
//     console.log(arr);
// }
// randArr(5);

// function min() {
//     let s = arguments[0];
//     for(let i of arguments) {
//         if (i<s) {
//             s=i;
//     console.log(s);
// }
// min(9, 5, 12, 30, 53);


// function midl(arr = []) {
//     let sum = 0;
//     for(let i of arr) {
//         sum+=i
//     }
//     // console.log(sum/arr.length);
//     return sum/arr.length
// }
let numArr = [1, 2, 3, 4, 5, 32, 146];
// console.log(midl(numArr)); 


// function keys(obj = {}) {        
//     arr = [];
//     for (const key in obj) {
//             arr.push(key);
//         }
//         return arr;
//     }

//     let keyArr = keys({name: 'Dima', age: 13, model: 'Camry'});
//     console.log(keyArr);

// function sumArr(arr0 = [], arr1 = []) {
//     let arrLong = '';
//     let arrSmol = '';
// if (arr0.length > arr1.length) {
//     arrLong = arr0; arrSmol = arr1;
// } else {
//     arrLong = arr1; arrSmol = arr0;
// }
//     let arrSum = [];
//     for (let i = 0; i < arrLong.length; i++) {
//         arrSum.push(
//             arrLong[i]+(arrSmol[i]||0)
//         )
//     }
//     return arrSum
// }
// let numArr0 = [9, 5, 12, 30, 53]
// let sum = sumArr(numArr, numArr0);
// console.log(sum);

let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger  '

function trimName(name = '') {
    let trim = name.trim();
    let empty = '';
    let newName ='';
    for (let i = 0; i < trim.length; i++) {
        if (trim[i]==" "&&empty==" ") {

        }else{
            newName += trim[i];
        }
        empty = trim[i];
    }
    console.log(newName);
};

trimName(n1);