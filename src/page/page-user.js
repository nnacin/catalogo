"use strict";

let User = require("../core/user");

class PageUser extends User {
    constructor(userType) {
        super(userType);
        this._userType = userType;
    }

    getUserType() {
        return this._userType;
    }
}

module.exports = PageUser;