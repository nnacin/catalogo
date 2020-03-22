"use strict";

let Product = require("../core/product");
let PageUser = require("./page-user");

class PageProduct extends Product {
    constructor(name, price, userType) {
        super(name, price);
        this._user = new PageUser(userType);
    }

    getAmountAfterDiscount() {
        const isAboveLimit = this._price > this._user.getLimit()
        return isAboveLimit ? (this._price*this._user.getDiscount())/100 : this._price;
        // TODO: Implement getAmountAfterDiscount() method
    }

}

module.exports = PageProduct;