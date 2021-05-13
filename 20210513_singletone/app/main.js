import Date1000 from './date1000.js';

const date = new Date1000();

//file1
date.day = 1;
let { convert } = date.methods;
console.log(convert('5-13-2021'));
convert = () => 2021;

//file2

const date2 = new Date1000();

date2.day = 2;
const { convert : convert2 } = date.methods;

console.log(convert2('5-13-2021'));


//file3
const date3 = new Date1000();

date3.day = 3;

console.log(date, date2, date3);
