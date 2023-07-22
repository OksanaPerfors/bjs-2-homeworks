class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    const existingCall = this.alarmCollection.find(
      (call) => call.time === time
    );

    if (existingCall) {
      console.warn("Уже присутствует звонок на это же время");
    }
    const newCall = {
      callback,
      time,
      canCall: true,
    };

    this.alarmCollection.push(newCall);
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (call) => call.time !== time
    );
  }

  getCurrentFormattedTime() {
    const timeNow = new Date().toLocaleTimeString().slice(0, -3);
    return timeNow;
  }

  start() {
    if (this.intervalId != null) {
      return;
    }
    this.intervalId = setInterval(
      () =>
        this.alarmCollection.forEach((element) => {
          if (
            element.time === this.getCurrentFormattedTime() &&
            element.canCall === true
          ) {
            element.canCall = false;
            element.callback();
          }
        }),
      1000
    );
  }

  stop() {
    if (this.intervalId != null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetAllCalls() {
    this.alarmCollection.forEach((element) => (element.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}


