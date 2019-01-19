const Stack = require('./stack');
const Queue = require('./queue');

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("item1");
myWeeklyMenu.push("item2");
myWeeklyMenu.push("item3");

console.log(myWeeklyMenu._storage);
myWeeklyMenu.pop();
console.log(myWeeklyMenu._storage);
myWeeklyMenu.pop();
console.log(myWeeklyMenu._storage);
myWeeklyMenu.push("item2");
console.log(myWeeklyMenu._storage);
myWeeklyMenu.pop();
console.log(myWeeklyMenu._storage);

// var myQueue = new Queue();

// myQueue.enqueue('item1');
// myQueue.enqueue('item2');
// myQueue.enqueue('item3');
// console.log("peek:", myQueue.peek());
// console.log(myQueue.storage);
// //console.log(myQueue.itemsLength);

// myQueue.dequeue();
// console.log(myQueue.storage);
// myQueue.dequeue();
// console.log(myQueue.storage);
// myQueue.enqueue('item4');
// console.log("peek:", myQueue.peek());
// console.log(myQueue.storage);
// myQueue.dequeue();
// console.log(myQueue.storage);
