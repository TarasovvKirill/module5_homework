/*5.4. Задание 3

Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
*/

  let x = 'Hello'
  let newString = "";

  for (let i = x.length-1; i>=0; i--) {
    newString += x[i]; }

  console.log(newString);
