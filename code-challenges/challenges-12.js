'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------

const oddFiltration = (arr) => {
    // write your code here
    const result = arr.filter(i => i%2 != 0 );
    return result;
}

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {
    // write your code here
    let obj = {}; let array = [];
    const results = arr.filter(l => {


        if (l.firstName == null && l.yearsOfExperience > 4 && l.tech == "JS") {
            obj.fullName = l.LastName;
            obj.tech = l.tech;
            array.push(obj);
        }
        else if (l.LastName == null && l.yearsOfExperience > 4 && l.tech == "JS") {
            obj.fullName = l.firstName;
            obj.tech = l.tech;
            array.push(obj);
        }
        else if (l.yearsOfExperience > 4 && l.tech == "JS") {
            obj.fullName = l.firstName + " " + l.LastName;
            obj.tech = l.tech;
            array.push(obj);
        }
        return obj;

    })
    return array;

}
// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

const vowelsFiltration = (arr) => {
    // write your code here
    let s = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].includes("a") || arr[i].includes("i") || arr[i].includes("e") || arr[i].includes("o") || arr[i].includes("u")) {
            s.push(arr[i]);
        }

    }
    arr = arr.filter(item => !s.includes(item))
    return arr;
} 

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {
    // write your code here
        let array = [];
        let one = arr1.filter(item => {
            return (!arr2.includes(item))
        })
        let two = arr2.filter(item => {
            return (!arr1.includes(item))
        })
        //array.push(one,two);
        array = one.concat(two);
        return array;

}
module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

