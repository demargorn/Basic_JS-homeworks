'use strict';

// задание 1
const parseCount = (number) => {
   if (!Number(number) && number != []) {
      throw new Error("Невалидное значение");
   } else {
      return Number.parseFloat(number);
   };
};

const validateCount = (number) => {
   try {
      return parseCount(number);
   } catch (error) {
      return error;
   };
};


// задание 2
class Triangle {
   constructor(a, b, c) {
      if (a + b < c || a + c < b || b + c < a) {
         throw new Error('Треугольник с такими сторонами не существует')
      };
      this.a = a;
      this.b = b;
      this.c = c;      
   };

   get perimeter() {
      return Number(this.a + this.b + this.c);
   };

   get area() {
      this.halfPmetr = this.perimeter / 2;
      return Number(Math.sqrt(this.halfPmetr * (this.halfPmetr - this.a) * (this.halfPmetr - this.b) * (this.halfPmetr - this.c)).toFixed(3));
   };
};

function getTriangle(a, b, c) {
   let newTriangle;

   try {
      return newTriangle = new Triangle(a, b, c);
   } catch (error) {
      console.log(error);
      return newTriangle = {
         get area() {
            return `Ошибка! Треугольник не существует`;
         },
         get perimeter() {
            return `Ошибка! Треугольник не существует`;
         }
      };
   };
};