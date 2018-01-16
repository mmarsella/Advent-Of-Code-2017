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
    if(usedWords.indexOf(words[i]) === -1){
      console.log('NOT FOUND =====>', words[i])
      usedWords.push(words[i]);
    }else{
      console.log('INVALID PASSWORD');
      valid = false;
      break;
    }
  }
  if(valid){counter++};
})

console.log(`***** ${counter} ********`)
  
  // let sample = ['aa', 'bb', 'cc', 'dd', 'aa'];
  //   let usedWords = [];
  //   let valid = true;
  // for(let i=0; i < sample.length; i++){
  //   if(!valid){
  //     break;
  //   }
  //   if(usedWords.indexOf(sample[i]) === -1){
  //     console.log('NOT FOUND =====>', sample[i])
  //     usedWords.push(sample[i]);
  //   }else{
  //     console.log('INVALID PASSWORD');
  //     valid = false;
  //     break;
  //   }
  // }
