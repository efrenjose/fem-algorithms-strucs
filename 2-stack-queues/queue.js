function Queue() {
    this.storage = "";
    this.count = 0;
    this.itemsLength = ""; //contains every item's length delimtered with a semi colum. ex: 5;3;7;9;4;5
  }
  
  Queue.prototype.enqueue = function(val) {
    this.storage += val + ";";
    this.itemsLength += val.length + ";";
    this.count++;
  };
  
  Queue.prototype.dequeue = function() {
    this.storage = this.storage.substring(parseInt(this.itemsLength.substring(0,1)) + 1);
    this.itemsLength = this.itemsLength.substring(0,1);
    this.count--;
  };
  
  Queue.prototype.peek = function() {
    var peekLength = this.itemsLength.substring(this.itemsLength.length - 2, this.itemsLength.length - 1);
    return this.storage.substring((this.storage.length - 1) - peekLength);
  };
  
  Queue.prototype.count = function() {
    return this.count;
  };

  module.exports = Queue;