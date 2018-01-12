var fs = require('fs');
var puzzleInput = fs.readFileSync('puzzleInput.txt').toString();
var arr = puzzleInput.split(' +');
arr = arr[0].split('\n')
var sample = [
"5 9 2 8",
"9 4 7 3",
"3 8 6 5"
];
var n = arr[0].split(' ');
let sum = 0;

// each space sep list of numbers
arr.forEach(function(elem){
  let foundResult;
  let nums = elem.split(' ');  
  nums.forEach(function(el,i,arr){
    el = parseInt(el);
    if(!Number.isInteger(el)){return;}
    for(let idx=i + 1; idx <= arr.length-1; idx++){
      // try dividing #s in order
      foundResult = el % arr[idx] === 0 ? el / arr[idx] : null;

      // try dividing #s in reverse order
      if(!foundResult){
        foundResult = arr[idx] % el === 0 ? arr[idx] / el : null;
      }
      // Break out if we found a keeper
      if(foundResult){
        sum += foundResult || 0;
        break;
      }
    }
  })
})

console.log(`****** ${sum} ********`)