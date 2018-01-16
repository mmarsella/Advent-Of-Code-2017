const {puzzleReader} = require('../helpers/puzzleReader');
let input = puzzleReader('./puzzleInput.txt');
var arr = input.split('\n');
var counter = 0;
var sample = ['0', '3', '0','1', '-3']

arr.forEach(function(el,i){
  arr[i] = parseInt(el);
})

let idx = 0;
while(idx >= 0 && idx < arr.length){
  let i = idx;
  idx = arr[idx] + idx;
  arr[i] = arr[i] >= 3 ? arr[i] - 1 : arr[i] + 1
  counter++;
}

console.log(`*********  ${counter} ********`)