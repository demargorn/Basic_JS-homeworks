'use strict';

// задача 1
function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  if (arr.length === 0) {
    return 0;
  };

  arr.forEach(el => {
    if (el < min) {
      min = el;
    };
    if (el > max) {
      max = el;
    };
    sum += el;
  });
  avg = sum / arr.length;    
  return {min:min, max:max, avg:+avg.toFixed(2)};
};


// задача 2
function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  return arr.reduce((acc, el) => acc += el, 0);
};

function differenceMaxMinWorker(...arr) {  
  if (arr.length === 0) {
      return 0;
  }; 
  return Math.max(...arr) - Math.min(...arr);   
};

function differenceEvenOddWorker(...arr) {
  let sumEven = 0;
  let sumOdd = 0;

  if (arr.length === 0) {
    return 0;
  };

  arr.forEach(el => {
    if (el % 2 === 0) {
      sumEven += el;
    } else {
      sumOdd += el;
    };    
  });
  return sumEven - sumOdd;
};

function averageEvenElementsWorker(...arr) {
  let count = 0;
  let sum = 0;

  if (arr.length === 0) {
    return 0;
  };

  arr.forEach(el => {
    if (el % 2 === 0) {
      sum += el;
      count += 1;
    };    
  })
  return sum / count;
};


//задача 3
function makeWork(arrOfArr, func) {
  let maxWorkerResult = 0;

  if (arr.length === 0) {
    return 0;
  };
  
  arrOfArr.forEach(el => {
    let result = func(...el);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    };
  });
  return maxWorkerResult;
}; 