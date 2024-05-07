'use strict';

class AlarmClock {
   constructor() {
      this.alarmCollection = [];
      this.timerId = null;
   };

   addClock(time, callback) {
      this.time = new Date().setHours(HH, [MM]);
      if (!time || !callback) {
         throw new Error('Отсутствуют обязательные аргументы')
      };
   };
};

