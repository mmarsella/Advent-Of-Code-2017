const {puzzleReader} = require('../helpers/puzzleReader');
let input = puzzleReader('./puzzleInput.txt');
var arr = input.split('\n');
let counter = 0;

//test all lines
arr.forEach(function(el,i){
  let words = el.split(' ');
  let usedWords = [];
  let valid = true;

  for(let i=0; i < words.length; i++){
    if(!valid){
      break;
    }

    let arrToCheck = words.slice();
    arrToCheck.splice(i,1);
    if(usedWords.indexOf(words[i]) === -1 && !checkInvalid(words[i], arrToCheck)){
      usedWords.push(words[i]);
    }else{
      valid = false;
      break;
    }
  }
  if(valid){counter++};
})

// mark : krma
function checkInvalid(word, arr){
  let chars = word.split('');
  let invalid = false;

  // iterate through each word in the array
  for(let i=0; i < arr.length; i++){
    if(!invalid){
      let arrChars = arr[i].split('');
      
      //iterate over each char in each word
      for(let idx = 0; idx < arrChars.length; idx++){
        // if dif lengths, then no need
        if(arrChars.length !== chars.length){
          break;
        }
        if(chars.indexOf(arrChars[idx]) === -1){
          invalid = false;
          break;
        }

        // no differences found means we have an anagram
        if(idx + 1 === arrChars.length){
          invalid = true;
          break;
        }
      }      
    }
  }

  console.log('invalid? -->', invalid);

  return invalid;
}
console.log(`***** ${counter} ********`)

// checkInvalid('mco', ['qrwu', 'mgnw', 'hvflf', 'ytspp', 'mco', 'ikvbqg', 'fflvh', 'wts', 'cbbf']);
