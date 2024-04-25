'use strict';

// задание 1
function solveEquation(a, b, c) {
  let arr = [];
  let x1, x2;
  let discriminant = (b ** 2) - (4 * a * c);

  if (discriminant < 0) {
    arr = [];
  };
  if (discriminant === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  };
  if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1, x2);
  };  
  console.log(arr);
  return arr;
};

solveEquation(1, 5, 4); // ok