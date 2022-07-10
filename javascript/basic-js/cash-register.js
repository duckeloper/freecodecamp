function checkCashRegister(price, cash, cid) {
    let changedArr = [
      ["PENNY", 0],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ]
  
    const kindsOfMoney100 = {
      "PENNY": 1,
      "NICKEL": 5,
      "DIME": 10,
      "QUARTER": 25,
      "ONE": 100,
      "FIVE": 500,
      "TEN": 1000,
      "TWENTY": 2000,
      "ONE HUNDRED": 10000
    }
  
    // 0. CID * 100
    const cid100 = [];
    for (let i = 0; i < cid.length; i++) {
      let tempArr = [];
      tempArr.push(cid[i][0]);
      tempArr.push(cid[i][1] * 100);
      cid100.push(tempArr);
    }
  
  
    // 1. Calculate the change
    const changeNeeded = (cash - price) * 100;
    console.log(`Target Change(*100): ${changeNeeded}`);
  
  
    // 2. How much do we have?
    let moneyWeHave = 0;
    // console.log(`type of moneyWeHave?   ${typeof moneyWeHave}!!`)
    for (let i = 0; i < cid100.length; i++) {
      // console.log(`${cid[i][1]} is a type of a ${typeof cid[i][1]}`);
      moneyWeHave += cid100[i][1];
      // console.log(`updated: ${moneyWeHave}`);
    }
    console.log(`The Money We Have: ${moneyWeHave}`);
  
  
    // 2-1. money = change (CLOSED)
    if (moneyWeHave == changeNeeded) {
      console.log(`money = change`);
      console.log(cid)
      return {status: "CLOSED", change: cid};
    }
    
  
    // 2-2. Not enough money (INSUFFICIENT_FUNDS)
    // 2-2-1. simple: no money
    if (moneyWeHave < changeNeeded) {
      console.log(`Not enough money`);
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    // 2-2-2. We have the money but you gotta go
    let changeAttempt = 0;
    // loop through money we have big to small
    for (let i = cid100.length - 1; i >= 0; i--) {
      // if we have money of that currency, and it helps to add it
      console.log(`checking with: ${cid100[i][0]}:${cid100[i][1]}`)
      while(cid100[i][1] > 0 && changeNeeded >= changeAttempt + kindsOfMoney100[cid100[i][0]]) {
        changeAttempt += kindsOfMoney100[cid100[i][0]];
        changedArr[i][1] += kindsOfMoney100[cid100[i][0]];
        cid100[i][1] -= kindsOfMoney100[cid100[i][0]];
        console.log(`changeAttempt: ${changeAttempt}`);
      } 
    }
    // check changeAttempt
    console.log(`our best changeAttempt: ${changeAttempt}`);
    // not enough
    if (changeAttempt < changeNeeded) {
      console.log(`Our attempt(${changeAttempt}) < Needed(${changeNeeded})`);
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
  
    // 2-3. We've got the money and you can get it
    if (changeAttempt == changeNeeded) {
      console.log(`Our attempt(${changeAttempt}) = Needed(${changeNeeded})`);
      console.log(`It's really true right?: ${changeAttempt == changeNeeded}`);
      console.log(`cleaning it up...`);
      console.log(changedArr)
  
      // dividing number by 100 and removing 0
      let cleanedArr = []
      for (let i = 0; i < changedArr.length; i++) {
        if (changedArr[i][1] > 0) {
          let tempArr = [];
          tempArr.push(changedArr[i][0]);
          console.log(`${changedArr[i][1]} / 100: ${changedArr[i][1] / 100}`);
          tempArr.push(changedArr[i][1] / 100);
          cleanedArr.unshift(tempArr);
        }
        
      }
      console.log(`chekcing cleanedArr`);
      console.log(cleanedArr);
  
      console.log(`{status: "OPEN", change: ${cleanedArr}`);
      return {status: "OPEN", change: cleanedArr};
  
  
    }
  
  
  
  };
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])