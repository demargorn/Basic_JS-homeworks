'use strict';

// задача 1
function cachingDecoratorNew(func) {
   const cache = [];

   function wrapper(...args) {
       const hash = args.join();
       let objectInCache = cache.find(item => item === hash);

       if (objectInCache) {
           console.log(`Из кеша: ${cache[hash]}`);
           return `Из кеша: ${cache[hash]}`;
       } else {
           let result = func(...args);
           cache[hash] = result;
           cache.push(hash);

           if (cache.length > 5) {
               cache.shift();
           };
           console.log(`Вычисляем: ${result}`);
           return `Вычисляем: ${result}`;
       };
   };
   return wrapper;
};


//Задача № 2
function debounceDecoratorNew(func, delay) {
  
};