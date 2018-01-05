var fs = require('fs');

var puzzleInput = fs.readFileSync('puzzleInput.txt').toString();

// puzzleInput = "12131415";\
var arr = puzzleInput.split('');

// arr = '91212129'.split('')
console.log('arr', arr.length);

var counter = 0;

var step = arr.length / 2;

console.log('step is: ', step);

for(let i=0; i < arr.length; i++){
  var item = (i + step) % arr.length
  // console.log('arr[i]', arr[i])
  // console.log('arr[i]', arr[item])

  if(Number.parseInt(arr[i]) === Number.parseInt(arr[item])){
    counter += Number.parseInt(arr[i]);
  }

  console.log('COUNTER NOW:', counter)
}

console.log('**** Counter *****', counter);