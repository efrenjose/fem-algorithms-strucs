var Stack = function(capacity){
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
};

Stack.prototype.push = function(value){
    if (this._count < this._capacity) {
        this._storage[this._count++] = value;
        return this._count;
    }
    return "Maximum capacity reached."
};

Stack.prototype.pop = function(){
    if (this._count === 0) {
        return "Stack is empty";
    }

    var value = this._storage[--this._count];
    delete this._storage[this._count];
    
    if (this._count < 0) {
        this._count = 0;
    }

    return value;
};

Stack.prototype.peek = function() {
    return this._storage[this._count-1];
};

Stack.prototype.size = function(){
    return this._count;
};

module.exports = Stack;
