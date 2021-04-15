## Условия

- Простые условия

```js

//variant 1
const num = 10;
if(num > 0){
    console.log('Is positive');
}else{
    console.log('Is negative');
}


//variant 2
const num = 10;
let answer = 'Is negative';

if(num > 0){
    answer = 'Is positive';
}

console.log(answer);

//variant 3
const num = 10;
let answer = num > 0 ? 'Is positive' : 'Is negative';
console.log(answer);

//variant 4 NOT SO GOOD
const num = 10;
let answer = 'Is negative';

if(num > 0)    
    answer = 'Is positive';

console.log(answer);

//variant 5 NOT SO GOOD TOO
const num = 10;
let answer = 'Is negative';

if(num > 0) answer = 'Is positive';

console.log(answer);

//операнд 1 && операнд 2
//операнд 1 || операнд 2
```
### Тернарный оператор

условие ? действие ДА : действие НЕТ;

```js
const num = 10;
const isValid = num > 0 && n < 100 && n % 1 == 0;
let answer = isValid ? 'Is positive' : 'Is negative';
console.log(answer);
```

### Множественный выбор
```js
const num = false;
switch(num){//Строгое равенство ===
    case -1 : {
        console.log('Операция А');
        break;
    }
    case 0 : {
        console.log('Операция Б');
        break;
    }
    case 1 : {
        console.log('Операция В');
        break;
    }
    default : {
        console.log('Операция Ы');
    }
}

const num = 0;
switch(num){//Строгое равенство ===
    case 0 : {
        console.log('Операция Б');
    }
    case -1 : {
        console.log('Операция А');
    }
    case 1 : {
        console.log('Операция В');
    }
}

const num = 0;
switch(num){
    case -1 : {
        console.log('Операция А');
        break;
    }
    case 0 : {
        console.log('Операция Б');
        break;
    }
    case 1 ://Магия break
    case 2 :
    case 3 :
    case 4 : {
        console.log('Операция В');
        break;
    }
}

const num = 0;
switch(true){
    case num < 0 : {
        console.log('Операция А');
        break;
    }
    case 0 : {
        console.log('Операция Б');
        break;
    }
    case num > 0 : {
        console.log('Операция В');
        break;
    }
}
```

## Строки

Похожи на массивы, но не массивы!

```js

const city = 'Dnipro';//литеральный
console.log(city[1]);
city[1] = 'H';//не мутабельность
city.length = 123;//игнорирование действий человека
console.log(city.length);
console.log(city);
```

### Методы строк

```js
str.charAt(2) === str[2]
```

```js
console.log(city.replace(/p/g, 'Zaporijja'));
```

__trim()__ - хорошая чистка

__search like indexOf, but with RegExp__

#### антагонисты массивам
 - _str.split(delimeter)_ vs _arr.join(delimeter)_

#### похожие с массивами
 - _slice(start, end)_
 - _includes(searchVal)_
 - _indexOf(searchVal)_
 - _repeat(count)_

```js
console.log(city.slice(2, 4));
console.log(city.slice(2));
console.log(city.slice());
console.log(city.slice(-2));
console.log(city.slice(-3, -1));

console.log(city.substr(2, 2));
console.log(city.substring(2,3));

const elObj = {...city};
const el = [...city];
const el2 = city.split('');
console.log(el);
console.log(el2);
```