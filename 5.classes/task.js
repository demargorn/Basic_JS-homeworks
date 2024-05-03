'use strict';

// задание 1
class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
   };

   fix() {
      this.state <= (100 / 1.5) ? this.state *= 1.5 : this.state = 100;
   };

   set state(num) {
      if (num <= 0) {
         this.state = 0;
      } else if (num > 100) {
         this.state = 100;
      } else {
         this._state = num;         
      };
   };

   get state() {
      return this._state;
   };
};

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = 'magazine';
   };
};

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = 'book';
   };
};

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'novel';
   };
};

class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'fantastic';
   };
};

class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'detective';
   };
};

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);


// задание 2
class Library {
   constructor(name) {
      this.name = name;
      this.books = [];
   };

   addBook(book) {
      if (book.state > 30) {
         this.books.push(book);
      };
   };

   findBookBy(type, value) {
      let book = null;

      this.books.forEach(el => {
         for (let key in el) {
            if ((type === key) && (value === el[key])) {
               book = el;
            };
         };
      });
      return book;
   };

   giveBookByName(bookName) {
      let book = null;

      this.books.forEach((el, i) => {
         if (bookName === el.name) {
            this.books.splice(i, 1);
            book = el;
         };
      });
      return book;
   };
};

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));


// задание 3
class Student {
   constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.marks = {};
   };

   addMark(mark, subject) {
      if (mark < 2 || mark > 5 || !mark) {
         return;
      };
      if (this.marks[subject] === undefined) {
         this.marks[subject] = [];         
      };
      this.marks[subject].push(mark);
   };

   getAverageBySubject(subject) {
      if (this.marks[subject] === undefined) {
         return 0;
      } else {
         return this.marks[subject].reduce((acc, el) => acc += el, 0) / this.marks[subject].length;
      };
   };

   getAverage() {  
      if (Object.keys(this.marks).length === 0) {
         return 0;
      };
      return Object.keys(this.marks).reduce((acc, el) => acc += this.getAverageBySubject(el), 0) / Object.keys(this.marks).length;      
   };
};

const student = new Student("Олег Никифоров", 'male', 27);