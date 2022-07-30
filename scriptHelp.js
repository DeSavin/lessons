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