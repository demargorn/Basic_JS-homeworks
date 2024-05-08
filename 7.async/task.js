'use strict';

class AlarmClock {
   constructor() {
      this.alarmCollection = [];
      this.timerId = null;
   };

   addClock(time, callback) {
      this.time = new Date().setHours(hours, minutes);
      if (!time || !callback) {
         throw new Error('Отсутствуют обязательные аргументы');
      };

      const existingTimeIndexes = this.alarmCollection.map(call => call.time).indexOf(time);
      if (existingTimeIndexes !== -1) {
         console.warn('Уже присутствует звонок на это же время');
         return;
      };

      this.alarmCollection.push({
         callback,
         time,
         canCall: true,
      });   
   };

   removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter(call => call.time !== time);
   };

   getCurrentFormattedTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      return `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes}`;
   };
  
   start() {
      if (this.intervalId) {
        return;
      };
  
      this.intervalId = setInterval(() => {
         this.alarmCollection.forEach(call => {
            if (call.time === this.getCurrentFormattedTime() && call.canCall) {
               call.canCall = false;
               call.callback();
            };
         });
      }, 1000);
   };

   stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
   };

   resetAllCalls() {
      this.alarmCollection.forEach(call => call.canCall = true);
   };

   clearAlarms() {
      this.stop();
      this.alarmCollection = [];
   }; 
};