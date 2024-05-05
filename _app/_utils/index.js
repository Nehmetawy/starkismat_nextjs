exports = function () {
  const db_name = "lucky-ludo";
  const coll_name = "rvg_game";
  const servive = "lucky-ludo";
  // -------------------------
  // current time
  // -------------------------
  const offsetMilliseconds = (5 * 60 + 30) * 60 * 1000;
  const timenow = new Date();
  const targetDate = new Date(timenow.getTime() + offsetMilliseconds);

  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();
  const hours = targetDate.getHours();
  const minutes = targetDate.getMinutes();
  const seconds = targetDate.getSeconds();

  const totalMin = hours * 60 + minutes;
  const id = Math.floor(totalMin / 3);

  const remainder = totalMin % 3;
  const timeInBet = remainder * 60 + seconds;
  const isLocked = timeInBet <= 150 ? false : true;

  const betId = year * 10000000 + month * 100000 + day * 1000 + id;

  if (timeInBet <= 105 || timeInBet >= 170) {
    return;
  } else {
    const delay = 152 - timeInBet;
    setTimeout(declareresult, delay * 1000);
    return;
  }
  // -------------------------
  // result declaration
  // -------------------------

  function declareresult() {
    const mongo = context.services.get(servive);
    const rvg_coll = mongo.db(db_name).collection(coll_name);
    const query = {
      betid: betId,
    };
    // -------------------------
    // find document
    // -------------------------
    const document = rvg_coll.findOne(query);
    document.then((item) => {
      if (item.resultdeclared) {
        return;
      }

      const resultObj = getWinner(item);
      resultObj.timeofresult = timeInBet;
      resultObj.resultdeclared = true;

      const updateDoc = {
        $set: {
          ...resultObj,
        },
      };
      // now update the result
      const result = rvg_coll.updateOne(query, updateDoc);
      result
        .then((y) => {
          console.log("document updated", y);
        })
        .catch(() => {
          console.log("error updating the document");
        });
    });
  }

  // ------------------------------
  // declare the winner
  // ------------------------------
  function getWinner(item) {
    const on0 = item.on0;
    const on1 = item.on1;
    const on2 = item.on2;
    const on3 = item.on3;
    const on4 = item.on4;
    const on5 = item.on5;
    const on6 = item.on6;
    const on7 = item.on7;
    const on8 = item.on8;
    const on9 = item.on9;

    const onred = item.onred;
    const onviolet = item.onviolet;
    const ongreen = item.ongreen;

    var totaloncolor = ongreen + onred + onviolet;
    var totalonnum = on0 + on1 + on2 + on3 + on4 + on5 + on6 + on7 + on8 + on9;
    var total = totaloncolor + totalonnum;
    const profitThreshold = total / 2;

    const resultOject = {
      red: false,
      violet: false,
      green: false,
      number: 1,

      rgMultiplier: 2,
      violetMultiplier: 4,
      numMultiplier: 3,
      loss: 0,
    };

    // random violet winning priority
    const random = Math.floor(Math.random() * 1000);
    const isViolet = random > 880;

    // array of random numbers 1 to 4
    const casearray = [];
    var length = casearray.length;
    while (length < 4) {
      const random = Math.floor(Math.random() * 4) + 1;
      const isin = casearray.includes(random);
      if (!isin) {
        casearray.push(random);
      }
      length = casearray.length;
    }

    const redMin = Math.min(on2, on4, on6, on8);
    const greenMin = Math.min(on1, on3, on7, on9);

    const priceDistribution = {};
    const obj = {
      violetMultiplier: 4,
      rgMultiplier: 2,

      ifgreen: total,
      ifred: total,
      ifvioletgreen: total,
      ifvioletred: total,

      i: 3,
      j: 3,

      profitAmount: 0,
      resultDeclared: false,
      case: 0,
    };
    // --------------------------------------------
    // --------------------------------------------
    for (let i = 6; i >= 3; i--) {
      for (let j = 9; j >= 3; j--) {
        obj.ifgreen = ifgreen(i);
        obj.ifred = ifred(i);
        obj.ifvioletgreen = ifvioletgreen(j);
        obj.ifvioletred = ifvioletred(j);
        shouldCheck(i, j);
      }
    }
    // sort the profit, choose middle, set i and j
    readProfitObject();
    // find the multipliers and all
    declareWinner();
    function declareWinner() {
      // default case
      resultOject.rgMultiplier = obj.rgMultiplier;
      resultOject.violetMultiplier = obj.violetMultiplier;
      resultOject.numMultiplier = obj.i;

      if (obj.case === 1) {
        resultOject.green = true;
        resultOject.loss = ongreen * 2 + greenMin * obj.rgMultiplier;
        if (greenMin === on1) {
          resultOject.number = 1;
        }
        if (greenMin === on3) {
          resultOject.number = 3;
        }
        if (greenMin === on7) {
          resultOject.number = 7;
        }
        if (greenMin === on9) {
          resultOject.number = 9;
        }
      }
      if (obj.case === 2) {
        resultOject.red = true;
        resultOject.loss = onred * 2 + redMin * obj.rgMultiplier;
        if (redMin === on2) {
          resultOject.number = 2;
        }
        if (redMin === on4) {
          resultOject.number = 4;
        }
        if (redMin === on6) {
          resultOject.number = 6;
        }
        if (redMin === on8) {
          resultOject.number = 8;
        }
      }
      if (caseType === 3) {
        resultOject.green = true;
        resultOject.violet = true;
        resultOject.number = 5;
        resultOject.numMultiplier = obj.j;
        resultOject.loss = ongreen * 2 + onviolet * 4 + on5 * obj.j;
      }
      if (caseType === 4) {
        resultOject.red = true;
        resultOject.violet = true;
        resultOject.number = 0;
        resultOject.numMultiplier = obj.j;
        resultOject.loss = onred * 2 + onviolet * 4 + on0 * obj.j;
      }
    }

    // winner is declared
    return resultOject;
    // --------------------------------------------
    // --------------------------------------------
    // now loop through the obj
    function readProfitObject() {
      const keys = Object.keys(priceDistribution);
      const profitArray = [];

      keys.map((key) => {
        const value = priceDistribution[key];
        if (typeof value === "number") {
          const isin = profitArray.includes(value);
          if (!isin) {
            profitArray.push(value);
          }
        }
      });

      profitArray.sort((a, b) => a - b);
      // get middle one
      const middleItem = getMiddleItem(profitArray);
      // this is the winner
      obj.profitAmount = middleItem;
      // multipliers of this winner
      for (let i = 6; i >= 3; i--) {
        for (let j = 9; j >= 3; j--) {
          const g = ifgreen(i);
          const r = ifred(i);
          const vg = ifvioletgreen(j);
          const vr = ifvioletred(j);
          if (g === middleItem) {
            obj.i = i;
            obj.j = j;
            obj.case = 1;
          }
          if (r === middleItem) {
            obj.i = i;
            obj.j = j;
            obj.case = 2;
          }
          if (vg === middleItem) {
            obj.i = i;
            obj.j = j;
            obj.case = 3;
          }
          if (vr === middleItem) {
            obj.i = i;
            obj.j = j;
            obj.case = 4;
          }
        }
      }
    }
    // --------------------------------------------
    // --------------------------------------------

    function getMiddleItem(array) {
      const length = array.length;
      const target = deviate(length);
      return array[target];
    }

    function deviate(length) {
      const middle = length / 2;
      const int = Math.floor(middle);
      return Math.min(Math.max(int, 0), length - 1);
    }
    // --------------------------------------------
    // --------------------------------------------
    function shouldCheck(i, j) {
      var maxProfit = Math.max(
        obj.ifgreen,
        obj.ifred,
        obj.ifvioletgreen,
        obj.ifvioletred
      );

      if (maxProfit > profitThreshold) {
        const name = `${i}-${j}`;
        priceDistribution[name] = maxProfit;
        return;
      }
    }

    function ifgreen(x) {
      const loss = ongreen * 2 + greenMin * x;
      return total - loss;
    }
    function ifred(x) {
      const loss = onred * 2 + redMin * x;
      return total - loss;
    }
    function ifvioletgreen(x) {
      const loss = ongreen * 2 + onviolet * 4 + on5 * x;
      return total - loss;
    }
    function ifvioletred(x) {
      const loss = onred * 2 + onviolet * 4 + on0 * x;
      return total - loss;
    }
  }
};
