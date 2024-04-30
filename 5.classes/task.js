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

   set stateItem(num) {
      if (num < 0) {
         this.state = 0;
      } else if (num > 0) {
         this.state = 100;
      } else {
         this.state = num;         
      };
   this._state = num;
   };

   get stateItem() {
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

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008); // ok
const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168); // ok


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

// console.log(library.findBookBy("name", "Пкник на обочине")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// console.log(library.giveBookByName("Машина времени"));
// console.log(library.giveBookByName("Мурзилка"));
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 2