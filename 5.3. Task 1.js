/*5.3 Задание 1

Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».*/

let x = 1;
if (isNaN(x)) {
   console.log('Упс, кажется, вы ошиблись');
} else {
   if (x%2===0) {
      console.log('Чётное');
   } else {
      console.log('Не чётное');
     }
  } 

/*
let x = +prompt("Введите что-нибудь");
if (isNaN(x)) {
   console.log('Упс, кажется, вы ошиблись');
} else {
   let result = (x%2===0) ? 'Чётное' : 'Не чётное';
   console.log(result);
}
*/