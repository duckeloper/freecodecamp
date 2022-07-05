// Convert Celsius to Fahrenheit
/* function convertToF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

convertToF(30); */




// Reverse a String
/* function reverseString(str) {
  let tempArr = [];
  for (let i = 0; i < str.length; i++) {
    tempArr.unshift(str[i]);
  }
  console.log(tempArr);
  let newStr = "";
  for (let j = 0; j < tempArr.length; j++) {
    newStr += tempArr[j];
  }
  return newStr;
}

reverseString("hello"); */




// Factorialize a Number
/* function factorialize(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

factorialize(5); */




// Find the Longest Word in a String
/* function findLongestWordLength(str) {
  console.log("setting maxLength to 0...");
  let maxLength = 0;
  console.log("setting newStr to an empty string...");
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {  // if the string is not a space
      newStr += str[i];
    } else { // if the string is a space
      if (newStr.length > maxLength) {
        maxLength = newStr.length;
        console.log("maxLength set to: " + maxLength);
      }
      newStr = ""
      console.log("resetting newStr to an empty string...")
    }
  }
  if (newStr.length > maxLength) {
    maxLength = newStr.length;
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog"); */




// Return Largest Numbers in Arrays
/* function largestOfFour(arr) {
  let newArr = [];
  let largestNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j == 0) {
        largestNumber = arr[i][j]
      } else if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j]
      }
    }
    newArr.push(largestNumber);
    console.log("newArr updated to: " + newArr);
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); */




// Confirm the Ending
/* function confirmEnding(str, target) {
  let endStrIndex = str.length - 1;
  let endTargetIndex = target.length - 1;
  for (let i = endStrIndex; i >= 0 && endTargetIndex >= 0; i--) {
    if (str[i] == target[endTargetIndex]) {
      console.log("str[i](" + str[i] + ") is " + target[endTargetIndex])
      endTargetIndex -= 1;
    } else { // if different
      console.log("str[i](" + str[i] + ") is not " + target[endTargetIndex])
      return false;
    }
  }
  return true;
  
  
}

confirmEnding("Bastian", "n"); */




// Repeat a String Repeat a String
/* function repeatStringNumTimes(str, num) {
  let newStr = "";
  for (let i = 1; i <= num; i++) {
    newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3); */




// Truncate a String
/* function truncateString(str, num) {
  let newStr = str;
  if (str.length > num) {
    newStr = "";
    for (let i = 0; i < num; i++) {
      newStr += str[i];
    }
    newStr += "...";
  }
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8); */




// Finders Keepers
/* function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num) == true) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0); */




// Boo who
/* function booWho(bool) {
  if (typeof bool == "boolean") {
    return true;
  } else {
    return false;
  }
}

booWho(null); */




// Title Case a Sentence
/* function titleCase(str) {
  let letterCount = 1;
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    console.log("i: " + i + " letterCount: " + letterCount);
    console.log("inspecting: " + str[i]);
    if (str[i] == " ") {
      console.log("space found, updating letterCount to 0");
      letterCount = 1;
      newStr += str[i];
    } else {
      if (letterCount == 1) {
        console.log("toUpper: " + str[i]);
        newStr += str[i].toUpperCase();
        console.log("letterCount: " + letterCount + "     " + newStr);
      } else {
        console.log("toLower: " + str[i]);
        newStr += str[i].toLowerCase();
        console.log(newStr);
      }
      letterCount += 1;
    }
  }
  return newStr;
}

titleCase("I'm a"); */




// Slice and Splice
/* function frankenSplice(arr1, arr2, n) {
  let newArr = [];
  if (arr2.length > n) {
  for (let i = 0; i < arr2.length; i++) {
    console.log('i: ' + i + ' arr1[i]: ' + arr2[i]);
    if (i == n) {
      console.log("i(" + i + ") = n(" + n + ")");
      for (let j = 0; j < arr1.length; j++) {
        newArr.push(arr1[j]);
      }
    }
    newArr.push(arr2[i]);
    console.log(newArr);
  }
  } else {
    newArr = arr2.slice();
    for (let j = 0; j < arr1.length; j++) {
        newArr.push(arr1[j]);
      }
    console.log(newArr);
  }

  return newArr;
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
 */




// Falsy Bouncer
/* function bouncer(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log("inspecting arr[i](" + arr[i] + ")     bool: " + !!arr[i]);
    if (!!arr[i]) {
      newArr.push(arr[i]);
    }
  }
  console.log("newArr: " + newArr);
  return newArr;
}

bouncer([7, "ate", "", false, 9]); */




// Where do I Belong
/* function getIndexToIns(arr, num) {
  let sortedArr = arr.slice();
  sortedArr.push(num);
  sortedArr = sortedArr.sort(function(a, b) {return a - b});
  console.log(`sortedArr ${sortedArr}`)

  let numIndex = sortedArr.indexOf(num);
  console.log("numIndex: " + numIndex);
  return numIndex;
}

getIndexToIns([40, 60], 50); */




// Mutations
/* function mutation(arr) {
  let arrFirst = arr[0].toLowerCase();
  let arrSecond = arr[1].toLowerCase();
  console.log(`arr[0](${arrFirst}) arr[1](${arrSecond})`)

  for (let i = 0; i < arrSecond.length; i++) {
    console.log(`inspecting ${arrSecond[i]}`)
    if(arrFirst.includes(arrSecond[i]) == false) {
      console.log(arrSecond[i] + " is not in " + arrFirst);
      return false;
    }
    
  }
  return true;
}

mutation(["Mary", "Army"]) */




// Chunky Monkey
/* function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let tempArr = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    tempArr.push(arr[i]);
    count += 1;
    if (count == size) {
      console.log('tempArr: ' + tempArr);
      newArr.push(tempArr);
      tempArr = [];
      count = 0;
    }
  }
  
  if (tempArr.length > 0) {
    console.log('tempArr: ' + tempArr);
    newArr.push(tempArr);
  }

  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) */