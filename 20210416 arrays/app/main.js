const arr = [11, 72, 112, 3, 9, 0];
// Array.prototype.myForEach = function( func){
//     const len = this.length;
//     for(let i = 0; i < len; i++){
//         if(this[i] === undefined) continue;
//         func(this[i], i, this);
//     }
// }

arr[33] = {};
arr.length = 123;
// console.log(arr.filter(el => true));



// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(let el of arr){
//     console.log(el);
// }

// arr.myForEach((el, i, link2Arr) => {
//     console.log(el);
// });

// forEach(arr, (el, i, link2Arr) => {
//     console.log(el);
// });

// function forEach(arr, func){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === undefined) continue;
//         func(arr[i], i, arr);
//     }
// }


// console.log(arr);
// function sortLikeNums(a, b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// }

// arr.sort(sortLikeNums);


// console.log(arr);

const temperatures = [13, 6, 7, 11, 2, 0, 15, -3, 17];

const tempsF = temperatures.map((el) =>  el * 1.8 + 32 );

const tempsWarm = temperatures.filter(el => el >= 15 );

const coldTemp = temperatures.find(el => el < 0);

// console.log(coldTemp);

const cities = ['London', 'Tokyo', 'Paris', 'New York', 'Pavlograd'];

cities.reduce((acc, el, i, arr) => {
    // console.log(acc, el, i);
    return el;
});

const tempHighest = temperatures.reduce((acc, el) => acc > el ? acc : el);

// console.log(tempHighest);

const tempStat = temperatures.reduce((acc, el) => {

    el < 0 ? acc.negative++ : acc.positive++;

    // console.log(acc, el);
    return acc;
}, { positive : 0, negative : 0 });

console.log(tempStat);

