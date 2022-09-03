/*5.5 Задание 4

Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}

getRandomIntInclusive(0, 100);