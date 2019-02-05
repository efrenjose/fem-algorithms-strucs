var Node = function(value) {
    this._value = value;
    this._next = null;
    this._prev = null;

    Object.defineProperty(Node.prototype, "value", {
        get: getValue,
        configurable: true
    })

    Object.defineProperty(Node.prototype, "next", {
        get: getNext,
        set: setNext,
        configurable: true
    })

    Object.defineProperty(Node.prototype, "prev", {
        get: getPrev,
        set: setPrev,
        configurable: true
    })

    function getValue() {
        return this._value;
    }

    function getNext() {
        return this._next;
    }

    function setNext(node) {
        this._next = node;
    }

    function getPrev() {
        return this._prev;
    }

    function setPrev(node) {
        this._prev = node;
    }
}

module.exports = Node;