"use strict";

class Product {
    constructor(name, userType, price) {
        this._name = name;
        this._userType = userType;
        this._price = price;
    }

    getUserType(){
        return this._userType;
    }

    getName(){
        return this._name;
    }


    getAmountAfterDiscount(userType) {
        switch (userType) {
            case 'Boy': 
                return this._price > 300 ? this._price * 0.5 : this._price;
            case 'Child': 
                return this._price > 49 ? this._price * 0.8 : this._price;
            case 'Girl':
                return this._price > 200 ? this._price * 0.7 : this._price;
            default:
                return price;

        }
    }

}

module.exports = Product;