function convertToRoman(num) {
    const splitArr = String(num).split("");
    console.log(`splitArr: [${splitArr}]`);
    const newArr = [];
  
    // oneth
    const oneth = splitArr[splitArr.length - 1]
    if (oneth == 1) {
      newArr.unshift("I");
    } else if (oneth == 2) {
      newArr.unshift("II");
    } else if (oneth == 3) {
      newArr.unshift("III");
    } else if (oneth == 4) {
      newArr.unshift("IV");
    } else if (oneth == 5) {
      newArr.unshift("V");
    } else if (oneth == 6) {
      newArr.unshift("VI");
    } else if (oneth == 7) {
      newArr.unshift("VII");
    } else if (oneth == 8) {
      newArr.unshift("VIII");
    } else if (oneth == 9) {
      newArr.unshift("IX");
    }
    console.log(`oneth added: ${oneth} => [${newArr}]`);
  
  
    // tenth
    if (splitArr.length >= 2) {
      const tenth = splitArr[splitArr.length - 2]
    if (tenth == 1) {
      newArr.unshift("X");
    } else if (tenth == 2) {
      newArr.unshift("XX");
    } else if (tenth == 3) {
      newArr.unshift("XXX");
    } else if (tenth == 4) {
      newArr.unshift("XL");
    } else if (tenth == 5) {
      newArr.unshift("L");
    } else if (tenth == 6) {
      newArr.unshift("LX");
    } else if (tenth == 7) {
      newArr.unshift("LXX");
    } else if (tenth == 8) {
      newArr.unshift("LXXX");
    } else if (tenth == 9) {
      newArr.unshift("XC");
    }
    console.log(`tenth added: ${tenth} => [${newArr}]`);
    }
  
  
    // hundredth
    if (splitArr.length >= 3) {
      const hundredth = splitArr[splitArr.length - 3]
    if (hundredth == 1) {
      newArr.unshift("C");
    } else if (hundredth == 2) {
      newArr.unshift("CC");
    } else if (hundredth == 3) {
      newArr.unshift("CCC");
    } else if (hundredth == 4) {
      newArr.unshift("CD");
    } else if (hundredth == 5) {
      newArr.unshift("D");
    } else if (hundredth == 6) {
      newArr.unshift("DC");
    } else if (hundredth == 7) {
      newArr.unshift("DCC");
    } else if (hundredth == 8) {
      newArr.unshift("DCCC");
    } else if (hundredth == 9) {
      newArr.unshift("CM");
    }
    console.log(`hundredth added: ${hundredth} => [${newArr}]`);
    }
  
  
    // thousandth
    if (splitArr.length >= 4) {
      const thousandth = splitArr[splitArr.length - 4]
    if (thousandth == 1) {
      newArr.unshift("M");
    } else if (thousandth == 2) {
      newArr.unshift("MM");
    } else if (thousandth == 3) {
      newArr.unshift("MMM");
    } else if (thousandth == 4) {
      newArr.unshift("MV");
    } else if (thousandth == 5) {
      newArr.unshift("V");
    }
    console.log(`thousandth added: ${thousandth} => [${newArr}]`);
    }
  
  
    // join
    const joinedStr = newArr.join("");
    console.log(`joinedStr: ${joinedStr}`);
   return joinedStr;
  }
  
  convertToRoman(453);