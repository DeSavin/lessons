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