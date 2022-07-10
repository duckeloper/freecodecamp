function palindrome(str) {
    str = str.toLowerCase();
    const splitArr = str.split("");
    console.log(`splitArr: [${splitArr}]`);
  
    // cleaner
    for (let i = 0; i < splitArr.length; i++) {
      if (/[A-Za-z0-9]/.test(splitArr[i]) == false) {
        splitArr.splice(i, 1);
        i--;
      }
    }
    console.log(`cleaner output: [${splitArr}]`);
  
    // checker
    for (let i = 0; i < splitArr.length; i++) {
      if (splitArr[i] != splitArr[splitArr.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  
  palindrome("eye");
  palindrome("A man, a plan, a canal. Panama")