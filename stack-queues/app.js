const Stack = require('./stack');

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("item1");
myWeeklyMenu.push("item2");
myWeeklyMenu.push("item3");

console.log(myWeeklyMenu.storage);
myWeeklyMenu.pop();
console.log(myWeeklyMenu.storage);
myWeeklyMenu.pop();
console.log(myWeeklyMenu.storage);
myWeeklyMenu.push("item2");
console.log(myWeeklyMenu.storage);
myWeeklyMenu.pop();
console.log(myWeeklyMenu.storage);