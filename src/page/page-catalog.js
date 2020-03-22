"use strict";

let Catalog = require("../core/catalog");
let Product = require("../core/catalog");
let ProductCollection = require("../product-collection");

class PageCatalog extends Catalog {
    constructor(user) {
        const userType = user.getUserType()
        super(userType)
        this._user = userType;
        const catalog = new Catalog()
        this._products = new ProductCollection(catalog.getUserProducts(userType));
        const allUserProduct =  new ProductCollection(catalog.getUserProducts(userType))
        const allUserProductAfterDiscount = catalog.getUserProducts(userType).map(prod => {
            return { price: prod.getAmountAfterDiscount(userType), name: prod.getName() };
        }).sort(function(a, b){return b.price-a.price}).slice(0,3)
        console.log('allUserProductAfterDiscount', allUserProductAfterDiscount.map(prod => prod.name))
        const prods = allUserProductAfterDiscount.map(prod => prod.name)
        // TODO top 3 most expensive
        this._products = new ProductCollection(catalog.getUserProducts(userType).filter(prod => {
            return prods.includes(prod.getName()) ? true : false;
        }));
    }

    /**
     * @returns ProductCollection
     */
    getProducts() {

        return this._products;
    }
}

module.exports = PageCatalog;