"use strict";

class Product {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    getName(){
        return this._name;
    }

    getPrice(){
        return this._price;
    }

    getAmountAfterDiscount() {
        return this._price;
    }

}

module.exports = Product;