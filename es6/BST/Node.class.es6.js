export class Node {
  count = 1;

  constructor(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show(){
    return this.data;
  }
}