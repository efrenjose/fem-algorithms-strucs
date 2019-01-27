const BubbleSort = require('./bubble-sort');

var bubbleSort = new BubbleSort();
var arr = [10,7,8,4,6,2,1];

var sortedArr = bubbleSort.sort(arr);
console.log(sortedArr);