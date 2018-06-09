import { BST } from './BST/BST.class.es6';

function getRandomArr(length){
  let arr = [];
  for(var i = 0; i < length; i++){
    arr.push(Math.random() * length);
  }
  return arr;
}

let testArr = getRandomArr(100);
console.log(testArr);
let testBST = new BST();
