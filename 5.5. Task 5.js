/*5.5 Задание 5

Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
*/

let arr = [1, 2, 3];

function arrayIteration(arr) {
  console.log(arr.length);
  for (i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
  }
}

arrayIteration(arr);