const got = ['Dayaneris', 'John Snow', 'Dragon 1', 'Dead Dragon 2', 'Serceya Lanister'];

const dragon = {
    weight : 2000,
    wings : 2,
    isFire : true, 
    wingsWidth : 30,
    name : 'Дракон',
    owner : 'Dayaneris',
    '0' : 123
};

const got2 = Array.from(dragon);
// got2.a = 34343;
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
