const Node = require('./node');
const LinkedList = require('./linkedList');
var util = require('util')

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

var linkedList = new LinkedList();
linkedList.add(node1);
linkedList.add(node2);
linkedList.add(node3);
linkedList.add(node4);
linkedList.add(node5);

console.log(util.inspect(linkedList._top));