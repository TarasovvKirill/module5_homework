/*5.6 Задание 8
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
*/

let fruits = new Map([
  ["apple", "green"],

  ["strawberry", "red"],

  ["blueberry", "blue"]
]);

for (let key of fruits.keys()) {
  console.log("Ключ - " + key + ", значение - " + fruits.get(key));
}
