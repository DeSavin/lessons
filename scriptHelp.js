// Функция для удаления минимального значения из массива

function removeSmallest(numbers) {
    numbers = numbers.slice();
    numbers.splice( numbers.indexOf(Math.min.apply(null, numbers)),1);
    return numbers;
}
