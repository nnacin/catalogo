"use strict";

let Catalog = require("../core/catalog");
let PageProduct = require("./page-product");
let ProductCollection = require("../product-collection");
let userProducts = require("../data/user-products.json");

class PageCatalog extends Catalog {
    constructor(user) {
        const userType = user.getUserType()
        super(userType)
        //this._user = userType;
       
        let userProds = this._products.filter(product => {
            return userProducts.data[userType].includes(product.getName()) ? true : false;
        })
        userProds = userProds.map(product => {
            return new PageProduct(product.getName(), product.getPrice(), userType)
           // return userProducts.data[userType].includes(product.getName()) ? true : false;
        })
        const allUserProductAfterDiscount = userProds.map(prod => {
                return { price: prod.getAmountAfterDiscount(), name: prod.getName() };
        }).sort(function(a, b){return b.price-a.price}).slice(0,3)
        //this._products = new ProductCollection(userProds)
        const prods = allUserProductAfterDiscount.map(prod => prod.name)
        this._products = new ProductCollection(userProds.filter(prod => {
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