'use strict';

// задание 1
const parseCount = (number) => {
   if (!Number(number)) {
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
      const halfPmetr = this.perimeter / 2;
      return Number(Math.sqrt(halfPmetr * (halfPmetr - this.a) * (halfPmetr - this.b) * (halfPmetr - this.c)).toFixed(3));
   };
};

function getTriangle(a, b, c) {
   try {
      return new Triangle(a, b, c);
   } catch (error) {
      console.log(error);
      return {
         get area() {
            return `Ошибка! Треугольник не существует`;
         },
         get perimeter() {
            return `Ошибка! Треугольник не существует`;
         }
      };
   };
};