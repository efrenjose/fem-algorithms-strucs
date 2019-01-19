var Factorial =  function() {

}

Factorial.prototype.compute = function(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * this.compute(num - 1);
    }
}

module.exports = Factorial;