'use strict';

// задание 1
function solveEquation(a, b, c) {
  let arr = [];
  let x1, x2;
  let discriminant = (b ** 2) - (4 * a * c);

  if (discriminant < 0) {};
  if (discriminant === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  };
  if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1, x2);
  };  
  return arr;
};


// задание 2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  /*  percent - процентная ставка
      contribution - первый взнос
      amount - сумма кредита
      countMonths - кол-во месяцев 
  */ 
  const monthlyRate = percent / 100 / 12; // преобразование процентной ставки из диапазона от 0 до 100 в диапазон от 0 до 1  
  const loanAmount = amount - contribution; // рассчет тела кредита  
  let payment = loanAmount * (monthlyRate + monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)); // ежемесячный платеж  
  let totalPayments = payment * countMonths; // общая сумма выплат

  totalPayments = Number(totalPayments.toFixed(2));
  return totalPayments;
};