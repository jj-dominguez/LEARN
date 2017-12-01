// Day 5 Challenges - Promises
// Authors: Jordan Dominguez && Kevin Truong
// Dec 1, 2017

// Promise Wrapping
//

// Test variables
let str = 'teststring';
let arr = ['t','e','s','t','e','r'];

// Functions that create promises to check input validity and then output the input after a certain function
function splitText(txt){
  return new Promise(function(resolve, reject){
    if(typeof txt === "string"){
      resolve(txt.split(''))
    } else {
      reject("Input was not a string")
    }
  })
}

function reverseArray(arr) {
  return new Promise(function(resolve, reject) {
    if (typeof arr === 'object') {
      resolve(arr.reverse())
    } else {
      reject("Input was not an array")
    }
  })
}

function joinArray(arr){
  return new Promise(function(resolve, reject) {
    if (typeof arr === 'object') {
      resolve(arr.join(''))
    } else {
      reject("Input was not an array")
    }
  })
}

// Chained promises to return reverse text (function in next section)
splitText(text).then(function(txtSplitArray){
  return reverseArray(txtSplitArray)
}).then(function(reversedArray){
  return joinArray(reversedArray)
}).then(function(finalResult){
  console.log(finalResult)
}).catch(function(error){
  console.log("Error: " + error)})

// Function that returns chained promises to reverse text
function reverseText(text){
  return splitText(text).then(function(txtSplitArray){
    return reverseArray(txtSplitArray)
  }).then(function(reversedArray){
    return joinArray(reversedArray)
  }).catch(function(error){
    console.log("Error: " + error)})
}

// Function to return promise that checks if string and then capitalizes input
function capitalizeText(str){
  return new Promise(function(resolve, reject){
    if (typeof str === 'string') {
      resolve(str.toUpperCase());
    } else {
      reject("Input must be a string");
    }
  })
}


// Tests
capitalizeText(str).then(function(capitalizedText){
  console.log(capitalizedText)
}).catch(function(err){
  console.log("Error: " + error)
})

reverseText(str);
reverseText(arr);
