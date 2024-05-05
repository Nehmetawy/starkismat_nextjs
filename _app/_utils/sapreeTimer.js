const { DateTime } = require("luxon");

exports.getTime = function getTime() {
  const istDateTime = DateTime.now().setZone("Asia/Kolkata");
  const istYear = istDateTime.year;
  const istMonth = istDateTime.month;
  const istDay = istDateTime.day;
  const istHour = istDateTime.hour;
  const istMinute = istDateTime.minute;
  const istSecond = istDateTime.second;
  const itsMills = istDateTime.toMillis();
  return {
    year: istYear,
    month: istMonth,
    day: istDay,
    hour: istHour,
    minutes: istMinute,
    seconds: istSecond,
    mills: itsMills,
  };
};

exports.getBetId = function getBetId() {
  const istDateTime = DateTime.now().setZone("Asia/Kolkata");
  const totalMin = istDateTime.hour * 60 + istDateTime.minute;
  const id = Math.floor(totalMin / 3);
  const remainder = totalMin % 3;
  const seconds = istDateTime.second;
  const timeInBet = remainder * 60 + seconds;
  const isLocked = timeInBet <= 150 ? false : true;
  const year = istDateTime.year;
  const month = istDateTime.month;
  const day = istDateTime.day;
  const betId_ = year * 10000000 + month * 100000 + day * 1000;
  const _betId = id;
  const betId = betId_ + _betId;
  return { betId, timeInBet, isLocked };
};

exports.getNowTime = function getNowTime() {
  const istDateTime = DateTime.now().setZone("Asia/Kolkata");
  const itsMills = istDateTime.toMillis();
  return itsMills;
};
