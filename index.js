import { BST } from './es6/BST/BST.class.es6';

const fs = require('fs');

function getRandomArr(length){
  let arr = [];
  for(var i = 0; i < length; i++){
    arr.push(~~(Math.random() * length));
  }
  return arr;
}

const output = fs.readFileSync('test.txt', 'utf-8');
if(output === ''){
  fs.writeFileSync('test.txt', getRandomArr(100), function(err){
    if(err){
      return console.error(err);
    }
  })
}
const arr = [...new Set(output.split(',').map(item => parseInt(item)))];
console.log(arr.sort((a, b) => a - b).toString());
let testBST = new BST();
arr.forEach(item =>{testBST.insert(item)});
console.log(testBST.getMinNode());
console.log(testBST.getMaxNode());