"use strict";

let Product = require("../core/product");
let fetchedProducts = require("../data/products.json");

class Catalog {
    constructor() {
        const products = fetchedProducts.data;
        this._products = products.map(({ name, price }) => {
            return new Product(name, price)
        })
    }

    // getUserProducts(userType) {
    //     return this._products.filter(product => {
    //         return product.getUserType().includes(userType) ? true : false;
    //     })
    // }

    getProducts() {
        return this._products;
    }

}

module.exports = Catalog;