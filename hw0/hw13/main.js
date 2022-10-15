//
// function summator(arr1 = [], arr2 = []) {
//     let arrMax = arr1>=arr2?arr1:arr2;
//     let arrMin = arrMax==arr1?arr2:arr1;
//     let arrSum = [];
//
//     for (let i = 0; i < arrMax.length; i++) {
//         arrSum[i] = arrMin[i]==undefined?arrMax[i]:arrMax[i]+arrMin[i];
//     }
//     return arrSum;
// }

ar1 = [1,2,3,4,5,6];
ar2 = [2,3,4,5,6];
ar3 = [1,0,6,0,3];
// console.log(summator(ar1,ar2));


// function splase(arr = [], nam = 0) {
//     value = arr.splice(nam,1);
//     console.log(arr);
//     console.log(value);
//      arr.splice(nam+1,0,value[0]);
//     return arr
// }
//
// console.log(splase(ar1,3));

// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
//
// function trim(longName = '') {
//     let arr = longName.split(' ');
//     let arr1 = arr.filter(item => item !== "");
//     return arr1.join(` `);
// }
//
// console.log(trim(n3));


// function zero(arr = []) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0){
//             arr.splice(i,1);
//             arr.push(0);
//         }else continue;
//     } return arr;
// }
//
// let arrZero = zero(ar3);
// console.log(arrZero);