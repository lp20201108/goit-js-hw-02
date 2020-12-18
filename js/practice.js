// let arr = [1, 2, 'dsfsd', 3, 4, 5, 'dfvtr', 'gfbda', 5.5, 4.8, 9, 1.5, 7.6, 8, 9, 'sdsdc', 'scdsc'];

// const addToArray = function (arr) {
//     let responseArr = [];
//     responseArr['int'] = [];
//     responseArr['float'] = [];
//     responseArr['string'] = [];

//     for (let item of arr) {
//         if (Number.isInteger(item)) {
//             responseArr['int'].push(item);

//         }
        
//         else if (item % 1 !== 0 && typeof item === 'number') {
//             responseArr['float'].push(item);

//         }

//         else if (typeof item === 'string') {
//             responseArr['string'].push(item);

//         }
//     }
//     return responseArr;
// }

// console.log(addToArray(arr));



// const randomArr = (amount, min, max) => {
//   let num = [];

//   for (let i = 0; i < amount; i += 1) {
//     num.push(parseInt(Math.random() * (max - min) + min));
//   }
//   return num;
// };

// console.log(randomArr(2, 1, 1000));



// const logItems = function (array) {
//   for (const arr of array) {
//     const index = array.indexOf(arr);
//     console.log(`${index + 1} - ${arr}`);
//   }
