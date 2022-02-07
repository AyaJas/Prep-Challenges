'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    // write your code here
    let result = str.slice(str.lastIndexOf(' ') + 1);
    return result;
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    // write your code here
    var result = str.split(" ");
    let res = result[result.length - 1];
    return res;
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    // write your code here


    let i = str.indexOf("I");
    let am = str.indexOf("am");
    let was = str.indexOf("was");
    var newStr = str.split('');

    for (var a = 0; a <= str.length; a++) {
        if (str.includes("I") && !str.includes("am") && !str.includes("was")) {
            newStr.splice(i, 1, "We");
            newStr = newStr.join('');
            return newStr;
        }

        else if (str.includes("I") && str.includes("am")) {
            newStr.splice(i, 1, "We");
            newStr.splice(am, 2, "are");
            newStr = newStr.join('');
            return newStr;
        }

        else if (str.includes("I") && str.includes("was")) {
            newStr.splice(i, 1, "We");
            newStr.splice(was, 3, "were");
            newStr = newStr.join('');
            return newStr;
        }

    }

}


// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    // write your code here
    if (arr[4] != null) {
        let text = arr[4].substring(0, arr[4].length) + ",";
        arr[4] = text;
        return arr.join(" ");
    }
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    // write your code here
    var current = str[0]
    var count = 1
    var concat = ""

    for (var i = 1; i < str.length; i++) {

        if (current != str[i]) {
            if (current != " ") {
                concat = concat + current + count;
            } else {
                concat = concat + " ";
            }
            count = 0;
            current = str[i];
        }
        count = count + 1;

    }
    concat = concat + current + count;
    return concat;

}

module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };