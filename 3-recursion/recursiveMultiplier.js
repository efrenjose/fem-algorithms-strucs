const RecursiveReverse = require('./recursiveReverse');

var RecursiveMultiplier = function() {
    this._transformedArr = [];
    this._recursiveReverse = new RecursiveReverse();
}

RecursiveMultiplier.prototype.multiply = function(arr, multiplier) {
    if (arr.length > 0) {
        this._transformedArr.push((arr.pop() * multiplier));
        this.multiply(arr, 3);
    }
    return this._recursiveReverse.addItems(this._transformedArr);
}

module.exports = RecursiveMultiplier;