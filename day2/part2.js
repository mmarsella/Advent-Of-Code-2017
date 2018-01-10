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
sample.forEach(function(elem){

  let foundResult;
  let nums = elem.split(' ');  
  nums.forEach(function(el,i,arr){
    console.log('el', el)
    el = parseInt(el);
    if(!Number.isInteger(el)){return;}

    for(let idx=i + 1; idx <= arr.length-1; idx++){
      console.log('arr[idx]', arr[idx], el)

      let divider;
      let operand;

      if(el % arr[idx] === 0){
        
        foundResult = el > arr[idx] ? (el / arr[idx]) : (arr[idx] / el);
        console.log('foundResult', foundResult)
        break;
      } 
    }

  })

  sum += foundResult || 0;
})


console.log(`****** ${sum} ********`)