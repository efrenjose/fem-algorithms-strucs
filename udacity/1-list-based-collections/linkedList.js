const Node = require('./node');

var LinkedList = function() {
    this._length = 0;
    this._head = null;
    this._top = null;
}

LinkedList.prototype.add = function(node) {

    if (this._head === null) {
        this._head = node;
        this._top = node;

        this._length += 1;

        return node;
    }

    var newNode = node;
    var currentNode = this._top;

    newNode.prev = currentNode;
    currentNode.next = newNode;
    this._top = currentNode.next;

    this._length += 1;

    return newNode;
}

LinkedList.prototype.remove = function(position) {
    
}

module.exports = LinkedList;