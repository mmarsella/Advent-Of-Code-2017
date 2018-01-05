var fs = require('fs');

var puzzleInput = fs.readFileSync('puzzleInput.txt').toString();


var arr = puzzleInput.split('');

// arr = '91212129'.split('')
console.log('arr', arr.length);

var counter = 0;

for(let i=0; i < arr.length; i++){
  console.log('arr[i]', arr[i])
  console.log('arr[i+1]', arr[i+1])

  if(!arr[i+1]){
    if(Number.parseInt(arr[0]) === Number.parseInt(arr[i])){
      counter += Number.parseInt(arr[i]);
    }
  }
  if(Number.parseInt(arr[i]) === Number.parseInt(arr[i+1])){
    counter += Number.parseInt(arr[i]);
  }

  console.log('COUNTER NOW:', counter)
}

console.log('**** Counter *****', counter);