// Функция для удаления минимального значения из массива

function removeSmallest(numbers) {
    numbers = numbers.slice();
    numbers.splice( numbers.indexOf(Math.min.apply(null, numbers)),1);
    return numbers;
}

// Функция сложение 2х минимальных значени в массиве

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort(function (a, b) { 
      return a - b;
    });
    return numbers[0] + numbers[1];
  };

  // Функция сложения от 1 до заданного числа ( num)

  let summation = function (num) {
    let sum = 0;
    for( let i=0; i <= num; i++){
      sum += i
    }
    return sum;
  }

  // Функция сложения всех эл-тов массива кроме отрицательных

  function positiveSum(arr) {
    let sum = 0;
    for ( let i = 0; i < arr.length; i++){
      if ( arr[i] > 0) {
        sum += arr[i];
         }
    }
    return sum;
  }

// фУНКЦИя для поиска совпадения послених символов в строках

function solution(str, ending){
    return str.endsWith(ending);
  }

  //функция выводит числа в обратном порядке по убыванию

  function descendingOrder(n) {
    return parseInt(n.toString().split("").sort().reverse().join(""));
  }

  // Функция для вывода максимального и минмального значения в строке

  function highAndLow(numbers){
    let numberArray = numbers.split(" ");
    let min = Math.min(...numberArray);
    let max = Math.max(...numberArray);
    return max + " " + min;
    }

    // Удаление определенных символов в строке  ( удаляем глассные "aeiou"),
    // если нужно удалить все, кроме того что написано -  пишем вначале ^  = "^aeiou"


    function disemvowel(str) {
        str = str.replace(/[aeiou]/gi, '');
        return str;
      }

   // Замена всех элементов в строке на другие, если элементы повторяются   то выводим другое

   function duplicateEncode(word){
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            return 0;
        }
        else{
            return 1;
        }
    }
    return unique;
}

// функция считает колличество повторяемых символов в строке

function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }

  // функция ищет и выводит все слова в массиве, длинна которых 4 символа

  function friend(friends){
    return friends.filter(n => n.length === 4)
  }

  //функция выводит число, равное минимальному колличество символов из всех слов в строке

  function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

// функция которая считает кол-во гласных в строке 
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  //функция дублирует каждую букву в строке  ( abc = aabbcc), $&$& - 2 раза повторяется буква

  function doubleChar(str) {
    return str.replace(/./g, '$&$&');
    }

// функция добавляет в массив номерное знаение каждого элемента массива + ": "   (["a", "b", "c"] --> ["1: a", "2: b", "3: c"])
    var number = function(array) {
        return array.map(function (line, index) {
         return (index + 1) + ": " + line;
        });
    }

// функция считает число положительных чисел в массиве и сумму отрицательных и выводит в массив
// ( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], return [10, -65] )

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; i++)
    {
      if (input[i] > 0)
        positive ++;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}
    
// функция перемножает все элементы массива имежду собой
// ( [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 )

function grow(x){
    return x.reduce((previousValue, currentValue) => (previousValue * currentValue));
    }

// функция умножает все элементы массива на 2

function maps(x){
    let y = x.map((num) => (num * 2 ));
  return y;
  }

  // функция выводит число, полученное при сложении всех элементов массива, возведеных в квадрат
// for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

  function squareSum(numbers){
    if (numbers.length == 0){
      return 0;
    }
    let sum = numbers.map((num) =>( num*num));
  return sum.reduce ((val1, val2) => (val1+val2));
  }

//сравнение первой и последней буквы в строке у двух аргументов
// "chickadee", "chocolate cake"), true)


function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

// вывести в массив все числа кроме строк
//  filter_list([1,2,'a','b']) == [1,2]

function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }

// сортировка слов в строке по возрастанию чисел 
//  "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"


function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }

// функция выводит строчное значение с массива и меняет [,]  на пробел между словами
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
    return words.toString().split("").join("").replace(/[,]/gi, ' ');
 };

 ИЛИ

 function smash (words) {
    return words.join(" ");
 };

 // функция берет число из строки с текстом 
// ("4 years old"), =>  4);

 function getAge(inputString){
    return parseInt(inputString);
  }

  //функция выдает разницу между умножением 2х массивов
 // [3, 2, 5], [1, 4, 4]) =>  14);

  function findDifference(a, b) {

    return Math.abs (a.reduce((num, pos)=>num*pos) - b.reduce((num, pos)=>num*pos)) 
  }

  // функция переворачивает все буквы в словах  в строке, а слова оставляет в том же порядке
// "This is an example!" ==> "sihT si na !elpmaxe"

  function reverseWords(str) {
    return str.split(" ").map (
      function(a){
         return a.split("").reverse().join("");
       }).join(" ");
  }

  // функция выводит остаток от  массива, тот что не совпадает с 2м массивом
 // arrayDiff([1,2,2,2,3],[2]) == [1,3]

  function array_diff(a, b) {
    return a.filter(item => !b.includes(item));
  }

  // вырезает средние 2 буквы из строки, если кол-во букв в слове четное, и 1 букву по середине если нечетное
  //  ("test") => "es");    ("testing") => "t")

  function getMiddle(s){
  if ( s.length % 2 == 0){
    return s.substring ((s.length /2)-1 , (s.length /2) +1);
    } else if ( ( s.length % 2 == 1) ) {
        return s.substring ((s.length /2)+1 , (s.length /2));
     };
}

// выдает счетчик букв, которые идут после (a-m) и общую длинну строки
// s="aaaxbbbbyyhwawiwjjjwwm" => printer_error(s) => "8/22"


function printerError(s) {
  return `${s.replace(/[a-m]/g, "").length}/${s.length}`
  
}

// нужно возвести все цифпы в строке в квадрат и вывести значение в строку
// (squareDigits(2112), =>>  4114);

function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}

// замена нескольких символов в строке на другие

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

// сравнивает значения элементов массива с числом, если они меньше числа то вернет true
// [66, 101],  200),  =>>  true);

function smallEnough(a, limit){
  return a.every(x => x <= limit);
}

// вычисления факториала с помощью рекурсии
//  если в функцию приходит дробное число или не число  - возвращается 'ошибка'

function factorial(n) {
    if( typeof (n) !== 'number' || !Number.isInteger(n)){
      return "Ошибка";
    } else if (n <= 0) {
      return 1;
    }

    if ( n>=1){
      return n * factorial ( n -1);
    } else { 
      return 1;
    }
  }
    factorial (5);