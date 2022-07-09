// Sum All Numbers in a Range
/* function sumAll(arr) {
  const newArr = arr.sort(function(a, b) { return a - b});
  console.log(`newArr: ${newArr}`);
  let sum = 0;
  for (let i = newArr[0]; i <= newArr[1]; i++) {
    sum += i;
  }
  console.log(`sum: ${sum}`);

  return sum
}

sumAll([5, 10]); */




// Diff Two Arrays
/* function diffArray(arr1, arr2) {
  const newArr = [];
  const binArr = [];
  const tempArr = arr1.concat(arr2);
  console.log(`tempArr: ${tempArr}`);
  for (let i = 0; i < tempArr.length; i++) {
    let count = 0;
    for (let j = i + 1; j < tempArr.length; j++) {
      if (tempArr[i] == tempArr[j]) {
        count += 1;
      }
    }
    console.log(`tempArr[i]: ${tempArr[i]}    count: ${count}    binArr.indexOf(tempArr[i]): ${binArr.indexOf(tempArr[i])}`)
    if (count == 0 && binArr.indexOf(tempArr[i]) == -1) {
      console.log(`I'm in if`)
      newArr.push(tempArr[i]);
    } else {
      binArr.push(tempArr[i]);
      console.log(`newArr: ${newArr}`);
      console.log(`binArr: ${binArr}`);
    }
  }

  console.log(`========newArr: ${newArr}`);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); */





// Seek and Destroy
/* function destroyer(argument) {
  const targetArr = arguments[0];
  console.log(`targetArr: ${targetArr}`);
  const targetLength = targetArr.length;
  console.log(`targetLength: ${targetLength}`);
  const argLength = arguments.length;
  console.log(`argLength: ${argLength}`);

  // for each argument
  for (let i = 1; i < argLength; i++) {
    console.log(`checking with arguments(${i}): ${arguments[i]}`);

    // check all items in targetArr
    for (let j = 0; j < targetArr.length; j++) {
      if (arguments[i] == targetArr[j]) {
        targetArr.splice(j, 1);
        j--;
      }
    }
  }

  return targetArr;
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3); */




// Wherefore art thou
/* function whatIsInAName(collection, source) {
  const arr = [];
  const sourceKeys = Object.keys(source);
  let bool = true;
  console.log(`sourceKeys: ${sourceKeys}`);

  // for every obejct in collection
  for (let j = 0; j < collection.length; j++) {
    console.log(`found a target setting bool to true`);
    bool = true;
    console.log(`target: ${JSON.stringify(collection[j])}`);

        // check if it includes all key-value
       for (let i = 0; i < sourceKeys.length; i++) {
    console.log(`checking if key(${sourceKeys[i]}) has value(${source[sourceKeys[i]]})`)
          if (collection[j][sourceKeys[i]] != source[sourceKeys[i]]) {
            console.log(`invalid, setting bool to false`)
            bool = false;
            break;
          }
        }

      console.log(`bool is ${bool}`);
      if (bool == true) {
        arr.push(collection[j]);
      }
    
  }
  console.log(`arr: ${JSON.stringify(arr)}`);
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); */




// Spinal Tap Case
/* function spinalCase(str) {
  let splitArr = [];
  let flag = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(`checking ${str[i]}`)
    if (str[i] == " " || str[i] == "-" || str[i] == "_") {
      let word = str.slice(flag, i);
      console.log(`1 word: ${word}`);
      splitArr.push(word);
      console.log(`splitArr: [${splitArr}]`);
      flag = i + 1;
      console.log(`flag set to ${str[flag]}`);
      i++;
    } else if (/[A-Za-z]/.test(str[i]) && str[i].toUpperCase() == str[i] && i > 0) {
      let word = str.slice(flag, i);
      console.log(`2 word: ${word}`);
      splitArr.push(word);
      console.log(`splitArr: [${splitArr}]`);
      flag = i;
      console.log(`flag set to ${str[flag]}`);
    } else if (i == str.length - 1) {
      let word = str.slice(flag, i+1);
      console.log(`2 word: ${word}`);
      splitArr.push(word);
      console.log(`splitArr: [${splitArr}]`);
    }
  }
  console.log(`=====splitArr: [${splitArr}]`);

  const joinedStr = splitArr.join("-").toLowerCase();
  console.log(`joinedStr: ${joinedStr}`);
  return joinedStr;
}

spinalCase("thisIsSpinalTap")
 */




// Pig Latin
/* function translatePigLatin(str) {
  let flag = 0;
  // starts with vowel(s)
  if (/[aeiou]/.test(str[0])) {
    console.log(`vowel start`)
    const splitArr = str.split(" ");
    console.log(`splitArr: [${splitArr}]`);
    const newArr = splitArr.concat("way");
    console.log(`newArr: [${newArr}]`);
    const joinedStr = newArr.join("");
    console.log(`joinedStr: ${joinedStr}`);
    return joinedStr;
  }
  
  // starts with consonant(s), find cluster
  for (let i = 0; i < str.length; i++) {
    if (/[aeiou]/.test(str[i])) {
      const flag = i;
      const cluster = str.slice(0, i);
      console.log(`cluster: ${cluster}`);
      const notCluster = str.slice(i);
      console.log(`notCluster: ${notCluster}`);
      const splitArr = [notCluster, cluster, "ay"];
      console.log(`splitArr: ${splitArr}`);
      const joinedStr = splitArr.join("");
      console.log(`joinedStr: ${joinedStr}`);
      return joinedStr;
    }
  }


  // no vowel
  return str + "ay";

}

 translatePigLatin("rhythm") */




 // Search and Replace
 /* function myReplace(str, before, after) {
  if (before[0].toUpperCase() == before[0]) {
    after = after.slice(0, 1).toUpperCase() + after.slice(1);
  } else if (before[0].toLowerCase() == before[0]) {
    after = after.slice(0, 1).toLowerCase() + after.slice(1);
  }

  console.log(`before: ${before}    after: ${after}`);

  const splitArr = str.split(" ");
  console.log(`splitArr: [${splitArr}]`);
  const targetIndex = splitArr.indexOf(before);
  console.log(`indexOf(${before}): ${targetIndex}`)
  splitArr.splice(targetIndex, 1, after);
  console.log(`splitArr: [${splitArr}]`);
  const joinedStr = splitArr.join(" ");
  console.log(`joinedStr: ${joinedStr}`);
  return joinedStr;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting") */




// DNA Pairing
/* function pairElement(str) {
  let bigArr = [];

  for (let i = 0; i < str.length; i++) {
    const smallArr = [str[i]];
    if (str[i] == "A") {
      smallArr.push("T");
    } else if (str[i] == "T") {
      smallArr.push("A");
    } else if (str[i] == "C") {
      smallArr.push("G");
    } else if (str[i] == "G") {
      smallArr.push("C");
    }
    bigArr.push(smallArr);
  }
  return bigArr;
}

pairElement("GCG"); */




// Missing letters
/* function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const firstLetterIndex = alphabet.indexOf(str[0]);
  console.log(`firstLetterIndex: ${firstLetterIndex}`);
  for (let i = 0; i < str.length; i++) {
    if (str[i] != alphabet[firstLetterIndex + i]) {
      const missingIndex = firstLetterIndex + i;
      console.log(`${alphabet[missingIndex]} is missing`)
      return alphabet[missingIndex]
    }
  }

  return undefined;
}

fearNotLetter("abce"); */




// Sorted Union
/* function uniteUnique(arr) {
  const newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      console.log(`checking if ${arguments[i][j]} is in [${newArr}]`)
      if (newArr.indexOf(arguments[i][j]) == -1) {
        newArr.push(arguments[i][j]);
        console.log(`newArr: [${newArr}]`)
      }
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); */




// Convert HTML Entities
/* function convertHTML(str) {
  let newStr = str.slice(0);
  for (let j = 0; j < newStr.length; j++) {
    if (newStr[j] == "&") {
      const firstPiece = newStr.slice(0, j);
      const secondPiece = newStr.slice(j + 1);
      newStr = firstPiece + "&amp;" + secondPiece;
      console.log(`newStr: ${newStr}`);
    } else if (newStr[j] == "<") {
      const firstPiece = newStr.slice(0, j);
      const secondPiece = newStr.slice(j + 1);
      newStr = firstPiece + "&lt;" + secondPiece;
      console.log(`newStr: ${newStr}`);
    } else if (newStr[j] == ">") {
      const firstPiece = newStr.slice(0, j);
      const secondPiece = newStr.slice(j + 1);
      newStr = firstPiece + "&gt;" + secondPiece;
      console.log(`newStr: ${newStr}`);
    } else if (newStr[j] == '"') {
      const firstPiece = newStr.slice(0, j);
      const secondPiece = newStr.slice(j + 1);
      newStr = firstPiece + "&quot;" + secondPiece;
      console.log(`newStr: ${newStr}`);
    } else if (newStr[j] == "'") {
      const firstPiece = newStr.slice(0, j);
      const secondPiece = newStr.slice(j + 1);
      newStr = firstPiece + "&apos;" + secondPiece;
      console.log(`newStr: ${newStr}`);
    }
    

  }
  return newStr;
}

convertHTML('Stuff in "quotation marks"'); */




// Sum All Odd Fibonacci Numbers
/* function sumFibs(num) {
  let sum = 0;
  let firstNum = 1;
  let secondNum = 1;
  const fibArr = [firstNum, secondNum];
  while (secondNum <= num) {
    sum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = sum;
    if (sum <= num) {
      fibArr.push(secondNum);
    }
  }

  console.log(`fibArr: [${fibArr}]`);

  let fibSum = 0;
  for (let i = 0; fibArr[i] <= num; i++) {
    if (fibArr[i] % 2 != 0) {
      fibSum += fibArr[i];
      console.log(`fibSum: ${fibSum}`); 
  } 

}
return fibSum;
}

sumFibs(75025); */




// Sum All Primes
/* function sumPrimes(num) {
  const primeArr = [];
  
  for (let i = 2; i <= num; i++) {
  let isPrime = true;
    for (let j = 0; j < primeArr.length; j++) {
      if (i % primeArr[j] == 0 && primeArr[j] != 1) {
        console.log(`${i} is divisible by ${primeArr[j]}`)
        isPrime = false;
        break;
      }
    }
    if (isPrime == true) {
      console.log(`${i} is prime`)
      primeArr.push(i);
    }  
  }

  console.log(`primeArr: [${primeArr}]`)

  let sum = 0;
  for (let k = 0; k < primeArr.length; k++) {
    sum += primeArr[k];
  }
  console.log(`sum: ${sum}`);
  return sum;
}

sumPrimes(10);
 */




// Smallest Common Multiple
/* function smallestCommons(arr) {
  const sortedArr = arr.sort(function(a, b) { return a - b});
  console.log(`sortedArr: ${sortedArr}`);
  let bool = true;

  for (let i = sortedArr[1]; i > 0; i++) {
    bool = true;
    // console.log(`target: ${i}`);
    for (let j = sortedArr[0]; j <= sortedArr[1]; j++) {
      // console.log(`checking if ${i} is divisible by ${j}: ${i % j == 0}`);
      if (i % j == 0) {
        continue
      } else {
        bool = false;
        break;
      }
    }
    if (bool == true) {
      const commonMultiple = i;
      console.log(`commonMultiple: ${i}`);
      return commonMultiple;
    }

  }
}


smallestCommons([1, 13]); */




// Drop it
/* function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      console.log(`flag: ${arr[i]}`)
      return arr.slice(i)
    }
  }
  return [];
}

dropElements([1, 2, 3], function(n) {return n < 3; }); */



// Steamroller
/* function steamrollArray(arr) {
  const newArr = [];

  const flattener = function(x) {
      const result = x.reduce((acc, val) => acc.concat(val), []);
      return result;
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(`target: ${arr[i]}    arr: ${arr}`);
    if (Array.isArray(arr[i]) == true) {
      arr = flattener(arr);
      i--;
    }
  }
  
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]); */




// Binary Agents
/* function binaryAgent(str) {
  const outputStr = str
  // split string into an array of base 2 (binary) UTF-16 chars
  .split(' ')
  // map every binary char to a UTF-16 number of base 10
  // and then get the string representation of that UTF-16 number
  .map(bin => String.fromCharCode(parseInt(bin, 2)))
  // join the array back to a single string
  .join('');
  return outputStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); */




// Everything Be True
/* function truthCheck(collection, pre) {
  let bool = true;
  for (let i = 0; i < collection.length; i++) {
    console.log(`checking ${JSON.stringify(collection[i])}`)
    console.log(`collectionp[i][pre]: ${collection[i][pre]}`)
    console.log(`Boolean(collection[i][pre]): ${Boolean(collection[i][pre])}`);

    if (Boolean(collection[i][pre]) == false) {
      return false;
    }

  }
  return true;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"); */




// Arguments Optional
/* function addTogether() {
  let sum = 0;

  if (arguments.length == 2) {
    if (typeof arguments[0] != 'number' || typeof arguments[1] != 'number'){
      return undefined;
    } else {
      sum = arguments[0] + arguments[1];
    console.log(`sum: ${sum}`);
    return sum;
    }

  } else if (arguments.length == 1) {
    const firstNumber = arguments[0]
    if (typeof firstNumber != 'number') {
      return undefined;
    }
    function inside(number) {
      if(typeof number != 'number') {
        return undefined;
      }
      return firstNumber + number;
    }

    return inside;
  }

}
  
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") */




// Make a Person
/* const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(last) {
    fullName = fullName.split(" ")[0] + " " + last;
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName(); */




// Map the Debris
/* function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let newObj = {};
    newObj.name = arr[i]["name"];
    newObj.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt((arr[i]["avgAlt"] + earthRadius) ** 3 / GM))
    newArr.push(newObj);
  }
  // Math.round(2 * Math.PI * Math.sqrt((x["avgAlt"] + earthRadius) ** 3 / GM))

  console.log(JSON.stringify(newArr));
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); */