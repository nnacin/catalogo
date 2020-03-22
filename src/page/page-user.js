"use strict";

let User = require("../core/user");
let users = require("../data/users.json");

class PageUser extends User {
    constructor(userType) {
        super(userType);
        const [user] = users.data.filter(({ type }) => type === userType)
        this._discount = user.discount
        this._limit = user.limit;
    }

    getUserType() {
        return this._userType;
    }

    getDiscount() {
        return this._discount;
    }

    getLimit() {
        return this._limit;
    }
}

module.exports = PageUser;