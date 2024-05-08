'use strict';

function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.marks = [];
};

Student.prototype.setSubject = function(subjectName) {
   this.subject = subjectName;
};

Student.prototype.addMarks = function(...marksToAdd) {
   if(this.marks === undefined) { 
      return;
   };
   this.marks.push(...marksToAdd);
};

Student.prototype.getAverage = function() {
   if (this.marks === undefined || this.marks.length === 0) {
      return 0;
   };
   return this.marks.reduce((acc, el) => acc + el / this.marks.length, 0); 
};

Student.prototype.exclude = function(reason) {
   this.excluded = reason;
   delete this.subject;
   delete this.marks;
};