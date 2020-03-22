"use strict";

let Deque = require('collections/deque');

class ProductCollection {

    constructor(items) {
        this._items = new Deque(items);
    }

    current() {
        return this._items.shift();
    }

    isEmpty() {
        return 0 === this._items.length;
    }
}

module.exports = ProductCollection;