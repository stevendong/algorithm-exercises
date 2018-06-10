import { Node } from './Node.class.es6.js'

export class BST {
  _count = 1;
  root = null;

  constructor(){}

  insert(data){
    let n = new Node(data, null, null);
    if(this.root === null){
      this.root = n;
    } else {
      let current = this.root;
      let parent;
      while(true){
        parent = current;
        if(data < current.data){
          current = current.left;
          if(current === null){
            parent.left = n;
            break;
          }
        } else {
          current = current.right;
          if(current === null){
            parent.right = n;
            break;
          }
        }
      }
    }
  }

  inOrder(node = this.root, callback){
    if(node !== null){
      this._count++;
      this.inOrder(node.left, callback);
      if(callback){
        callback(node);
      }
      this.inOrder(node.right, callback);
    }
  }

  showNodeCount(node = this.root){
    this._count = 0;
    this.inOrder();
    return this._count;
  }

  getMinNode(node = this.root){
    let current = node;
    while(current.left !== null){
      current = current.left;
    }
    return current;
  }

  getMaxNode(node = this.root){
    let current = node;
    while(current.right !== null){
      current = current.right;
    }
    return current;
  }

  findNode(data, node = this.root){
    let current = node;
    while(current !== null){
      if(data === current.data){
        return current;
      } else if(data < current.data){
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove(data){
    this.root = this._removeNode(this.root, data);
  }

  _removeNode(node, data){
    if(node === null){
      return null;
    }
    if(node.data === data){
      if(node.left === null && node.right === null){
        return null;
      }
      if(node.left === null){
        node.right = this._removeNode(node.right, data);
        return node;
      }
      if(node.right === null){
        node.left = this._removeNode(node.left, data);
        return node;
      }
      let tempNode = this.getMinNode(node.right);
      node.data = tempNode.data;
      node.right = this._removeNode(node.right, data);
      return node;
    } else if(data < node.data){
      node.left = this._removeNode(node.left, data);
      return node;
    } else {
      node.right = this._removeNode(node.right, data);
      return node;
    }
  }

  update(data){
    let targetNode = this.findNode(data);
    targetNode.count++;
    return targetNode;
  }
}