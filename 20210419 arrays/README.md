#### Массив - объект
```js
const arr = [1, 2];
// arr[100] = 34;
arr[-33] = 'Alloha';
arr[0.5] = 'Половинка';
arr['Турция'] = 'Отпуск';
// arr['55'] = 'Тест';
arr['59.3'] = 'Тест';
arr['59ффффф'] = 'Тест';
arr[arr] = 'Массив';
console.log(arr);
```

### reduceRight как обычный, только арабский
Идет с _length - 1_ индекса, по _0_-ой

### reverse
Разворачивает массив. Метод мутирующий
```js
const arr = [1, 2];
arr.a = 3;
arr.b = 4;
arr.reverse();

console.log(arr);
```

### fill
Заполняет массив чем-то
```js
const arr = [1, 2, 3];
arr[123] = '123';
arr.fill(777);
console.log(arr);

const arr2 = new Array(100);
arr2.fill(Math.random());
console.log(arr2);
```

### includes
```js
const arr = [1, 2, 3];

console.log(arr.includes(2));
```

### flat
```js
const arr = [1, [2, [3, [4, 4.1, 4.2, [4.31, 4.32]], 5]]];

console.log(arr.flat(Number.MAX_SAFE_INTEGER));
```

### slice, splice

__splice:__
- Обрезать
- Вырезать
- Заменять
- Добавлять (в начало, конец, середину)

```js

const got = ['Dayaneris', 'John Snow', 'Dragon 1', 'Dead Dragon 2', 'Serceya Lanister'];

//slice - не мутирующий
console.log(got.slice(1, 3));
console.log(got.slice());
console.log(got.slice(-2));
console.log(got.slice(2));
console.log(got.slice(1, -2));

//splice - обрезать с первого и до конца
const tempGot = got.splice(1);
console.log(got);
console.log(tempGot);

//splice - вырезка конкретного элемента из массива
const tempGot = got.splice(1, 1);
console.log(got);
console.log(tempGot);

//splice - вырезка конкретного элемента из массива
const tempGot = got.splice(1, 1, 'Иван Снег', 'Девочка без имени');
console.log(got);
console.log(tempGot);

```

### concat
Добавляет в конец нового массива элементы принимая их как:
- перечень аргументов ```js got.concat(1, 2, 3)```
- перечень массивов ```js got.concat([1, 2], [3, 4], [5, 6])```
```js

const got = ['Dayaneris', 'John Snow', 'Dragon 1', 'Dead Dragon 2', 'Serceya Lanister'];

const got2 = got.concat(1, 2, 3);
console.log(got2);
console.log(got);

```

### from
Создает массивы из чего-то похожего на массивы(массивоподобная дичь)

- строки
- массивы (копирование массивов)
- arguments
```js
//like split('')
console.log(Array.from('Hello'));

const got2 = Array.from(got);
got2.a = 34343;
console.log(got2);
console.log(got);

function showGot(el){
    console.log([...arguments]);
    el.forEach(element => {
       console.log(element); 
    });
}


//console.log(Array.from([1, 2, 3], x => x + x));
//expected output: Array [2, 4, 6]
```