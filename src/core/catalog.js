"use strict";

let Product = require("../core/product");
let fetchedProducts = require("../data/products.json");

class Catalog {
    constructor() {
        const products = fetchedProducts.data;
        this._products = products.map(({ name, price }) => {
            return new Product(name, price);
        })
    }
}

module.exports = Catalog;