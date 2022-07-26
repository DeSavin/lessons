/* Задание на урок:




3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

console.log( NaN || 2 || undefined );

console.log( NaN && 2 && undefined );

console.log( 1 && 2 && 3 );

console.log( !1 && 2 || !3 );

console.log( 25 || null && !3 );

console.log( NaN || null || !3 || undefined || 5);

console.log( NaN || null && !3 && undefined || 5);

console.log( 5 === 5 && 3 > 1 || 5);

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
} */

/* let result = '';
const lenght = 10;

for (let i = 1; i < lenght; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}

console.log(result);


for (i=5; i <= 10; i++)  {
    console.log(i);
}  */

/* for (i = 20; i >= 10; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
}

for (i = 2; i <= 10; i+=2) {
    console.log(i);
} */

/* for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
} */

let i = 2;

do {
    if (i % 2 === 0) {
        i++;
        
    } else {
        console.log(i);
        i++;
    }
    
}
while (i <= 16);


function fifthTask() {
    const arrayOfNumbers = [];
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers.push(i);
    }
    console.log(arrayOfNumbers);
    
    return arrayOfNumbers;
}


console.log(fifthTask());

function secondTask() {
    for (i=20; i > 9; i--) {
        if (i===13) {
            break;
        }
        console.log(i);
    }
    
    
}




function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result);
    return result;
}

firstTask();

function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }

    console.log(data);
    return data;
}

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i=5; i>data.length; i--) {
        result[i] = data[i];
    }
    console.log(result);
    return result;
}

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }

    console.log(result);
    return result;
}

thirdTask();



/* const lines = 5;
let result = '';

for (let i = 0; i < lines; i++) {
    for (let j = 2; j > i; j++) {
        result += "*";
    }
    result += '\n';
}

console.log(result); */

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";

    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
        
    }
    result += "\n";
}

console.log(result)


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i<2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    if (a !=null && b!=null && a !='' && b != '' && a.length<50) {
        personalMovieDB.movies[a]=b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

}

if(personalMovieDB <10) {
    console.log("промсотрено мало");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
    console.log("вы зритнль");
} else if (personalMovieDB.count >=30) {
    console.log("вы киноман");
} else {
    console.log("ошибка");
}

console.log(personalMovieDB);


function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Антон');

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);


function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);

for (let i = 20; i<21; i--) {
    if (i===13) {
        break;
    }
    console.log(i);
}


function secondTask() {
    for (let i=2; i<11; i++){
        if (i %2 ==0) {
            console.log(i);
        } 
        
    }
    
}
secondTask();


function fifthTask() {
    const arrayOfNumbers = [];
    for (let i =5; i<11; i++) {
        arrayOfNumbers.push(i);
    }
    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}
fifthTask();

function firstTask() {

    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    
    for (let i=0; i<arr.length; i++){
        result[i] = arr[i];
    }
    console.log(result);
    return result;

}
firstTask();

function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i =0;i<data.length;i++) {
        if (typeof(data[i]) ==="number") {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === "string") {
            data[i] = `${data[i]}  - done`;
        }
    }
    console.log(data);
    return data;
}
secondTask();

function thirdTask() {

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i=0;i<data.length;i++){
        result[i ] = data[(data.length - 1) - i];
    }
    console.log(result);
    return result;
}
thirdTask();

function sayHello(name) {
    return `Привет, ${name}!`;
}
sayHello(' Антон');


function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Антон');

function getMathResult(num, count) {
    
        if (typeof(count) !=="number" || count <= 0) {
            return num;
        } 
        
        let str = '';

        for (let i =1; i <= count; i++){
            if (i=== count) {
                str += `${num *i}`;
            } else {str += `${num*i}---`;
        }
        }
        return str;
}
getMathResult(10, 5);


const logg = "хер собачий";

console.log(logg.slice(4,12));


const gram = " сосай лалка-ыы";

console.log(gram.slice(6,11));


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


// Код возьмите из предыдущего домашнего задания
/* 
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i<2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        if (a !=null && b!=null && a !='' && b != '' && a.length<50) {
            personalMovieDB.movies[a]=b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if(personalMovieDB <10) {
        console.log("промсотрено мало");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
        console.log("вы зритнль");
    } else if (personalMovieDB.count >=30) {
        console.log("вы киноман");
    } else {
        console.log("ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

console.log(personalMovieDB);


function writeYourGenres() {
    for (let i =1; i<=3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres(); */