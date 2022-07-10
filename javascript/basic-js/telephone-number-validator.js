function telephoneCheck(str) {
    const testArr = str.split("");
    console.log(`testArr: [${testArr}]    testArr[0]: ${testArr[0]}`);
    console.log(`testArr[0] == "1": ${testArr[0] == "1"}`);
    console.log(`testArr[0] == "(": ${testArr[0] == "("}`);
    console.log(`testArr[0] == "5": ${testArr[0] == "5"}`);
  
  
  // length check
    if (testArr.length <= 8) {
      console.log(`length too short`)
      return false;
    }
  
  
  // parentheses in strange places check
    for (let i = 3; i < testArr.length; i++) {
      if (testArr[i] == "(") {
        console.log(`strange ( position`)
        return false;
      }
    }
  
    for (let i = 7; i < testArr.length; i++) {
      if (testArr[i] == ")") {
        console.log(`strange ) position`)
        return false;
      }
    }
  
  
  // parentheses pair check
    for (let i = 0; i < testArr.length; i++) {
      if (testArr[i] == "(") {
        if (testArr[i+4] != ")") {
          console.log(`( but no )`);
          return false;
        }
      } else if (testArr[i] == ")") {
        if (testArr[i-4] != "(") {
          console.log(`) but no (`);
          return false;
        }
      }
    }
  
    // strange space check
    if (testArr[2] == " ") {
      console.log(`strange space`);
      return false;
    }
  
    // strange beginning check
    if (testArr[0] != "1" && testArr[0] != "(" && testArr[0] != "5") {
      return false;
    }
  
  
    // too many numbers after parenthesis
    let numberCount = 0;
    for (let i = 0; i < testArr.length; i++) {
      if (testArr[i] == ")") {
        for (let j = i + 1; j < testArr.length; j++) {
          console.log(`testing if ${testArr[j]} is number: ${/\d/.test(testArr[j])}`)
          if (/\d/.test(testArr[j])) {
            numberCount += 1;
          }
        }
        console.log(`numberCount: ${numberCount}`);
        if (numberCount >= 8) {
          return false;
        }
      }
    }
  
  
    // strange character check
    for (let i = 0; i < testArr.length; i++) {
      console.log(`testing if ${testArr[i]} is valid: ${/[\d()\s]/.test(testArr[i])}`)
      if (/[\d()\s-]/.test(testArr[i]) == false) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(telephoneCheck("1(555)555-5555")); // true;
  