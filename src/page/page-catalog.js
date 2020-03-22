"use strict";

let Catalog = require("../core/catalog");
let PageProduct = require("./page-product");
let ProductCollection = require("../product-collection");
let userProducts = require("../data/user-products.json");

class PageCatalog extends Catalog {
    constructor(user) {
        super();
        const userType = user.getUserType()       
        let userProds = this._products.filter(product => userProducts.data[userType].includes(product.getName()));
        userProds = userProds.map(product => {
            return new PageProduct(product.getName(), product.getPrice(), userType);
        })
        const top3UserProducts = userProds
            .sort(function(a, b){return b.getAmountAfterDiscount()-a.getAmountAfterDiscount()})
            .slice(0,3);
        this._products = new ProductCollection(top3UserProducts);
    }

    /**
     * @returns ProductCollection
     */
    getProducts() {
        return this._products;
    }
}

module.exports = PageCatalog;