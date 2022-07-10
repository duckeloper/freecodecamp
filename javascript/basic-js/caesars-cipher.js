function rot13(str) {
    const alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
    const splitArr = str.split("");
    console.log(`splitArr: [${splitArr}]`);
  
    for (let i = 0; i < splitArr.length; i++) {
      console.log(`typeof splitArr[i](${splitArr[i]}): ${typeof splitArr[i]}`)
      if (typeof splitArr[i] == "string" && /[A-Z]/.test(splitArr[i])) {
        const originalIndex = alphabetArr.indexOf(splitArr[i]);
        let shiftedIndex = originalIndex + 13;
        if (shiftedIndex > 25) {
          shiftedIndex -= 26;
        }
        console.log(`shiftedIndex: ${shiftedIndex}`);
        splitArr[i] = alphabetArr[shiftedIndex];
      }
      
    }
    console.log(`splitArr: [${splitArr}]`);
    
    // join
    const joinedStr = splitArr.join("");
    console.log(`joinedStr: ${joinedStr}`);
    return joinedStr;
  }
  
  
  rot13("SERR PBQR PNZC");