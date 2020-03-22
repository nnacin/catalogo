"use strict";

let Product = require("../core/product");

class Catalog {
    constructor() {
        this._products = [
            new Product('Laptop', ['Boy', 'Girl'], 1000),
            new Product('PS5', ['Boy', 'Child'], 400),
            new Product('Tablet', ['Boy', 'Girl'], 300),
            new Product('Móvil', ['Boy', 'Girl'], 220),
            new Product('Kit Lego', ['Child'], 140),
            new Product('Deportivas', ['Boy', 'Girl', 'Child'], 120),
            new Product('Falda', ['Girl'], 60),
            new Product('Gorra', ['Child', 'Boy'], 50),
            new Product('Camisa', ['Boy'], 40),
            new Product('Canicas', ['Child', 'Boy'], 5)
        ]
    }

    

    getUserProducts(userType) {
        return this._products.filter(product => {
            return product.getUserType().includes(userType) ? true : false;
        })
    }

    getAllProducts() {
        return this._products;
    }

}

module.exports = Catalog;