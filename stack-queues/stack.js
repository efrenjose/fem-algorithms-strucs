var Stack = function(){
    this.storage = "";
    this.count = 0;
    this.topItemLength = 0;
};

Stack.prototype.push = function(val){
    this.topItemLength = val.length + 1; //add 1 to compensate for semi column
    this.storage += val + ";";
    this.count++;
};

Stack.prototype.pop = function(){
    this.storage = this.storage.substring(0, (this.storage.length - this.topItemLength))
    this.count--;
};

Stack.prototype.size = function(){
    return this.count;
};

module.exports = Stack;
