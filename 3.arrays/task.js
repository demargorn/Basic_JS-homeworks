'use strict';

// задание 1
function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((el, i) => el === arr2[i]);
};


// задание 2
const people = [
   {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
   {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
   {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
   {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
   {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
   {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
   {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
   {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
   {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
   {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
   {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
   {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
   {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
   {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
 ];

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(el => el.gender === gender).reduce((acc, el) => acc += el.age / users.filter(el => el.gender === gender).length, 0);
};