var fs = require('fs');

function puzzleReader(fileName){
  var puzzleInput = fs.readFileSync(fileName).toString();
  return puzzleInput;
}

module.exports = {
  puzzleReader:puzzleReader
}