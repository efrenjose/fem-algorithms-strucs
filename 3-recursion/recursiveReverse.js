var RecursiveReverse = function() {
    this._reversedArr = [];
}

RecursiveReverse.prototype.addItems = function(orderedArr) {
    if (orderedArr.length > 0) {
        this._reversedArr.push(orderedArr.pop());
        this.addItems(orderedArr);
    }
    return this._reversedArr;
}

module.exports = RecursiveReverse;