var fs = require('fs');
var puzzleInput = fs.readFileSync('puzzleInput.txt').toString();
var arr = puzzleInput.split(' +');
arr = arr[0].split('\n')


var sample = ["5 9 2 8",
"9 4 7 3",
"3 8 6 5"]

var n = arr[0].split(' ');
console.log(arr);

let sum = 0;

// each space sep list of numbers
sample.forEach(function(el,i){
  let high;
  let low;
  let nums = el.split(' ');  
  nums.forEach(function(el,i){
    el = parseInt(el);
    if(!Number.isInteger(el)){return;}
    if(!high && !low){
      high = el;
      low = el;
    }
    if(el > high){high = el};
    if(el < low) {low = el};
  })

  sum += (high - low);
})


console.log(`****** ${sum} ********`)