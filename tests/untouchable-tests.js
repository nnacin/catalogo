"use strict";

let PageCatalog = require("../src/page/page-catalog");
let PageUser = require("../src/page/page-user");
let assert = require("assert");


let total = calculate("Child");
assert(total === 528, "Unexpected result for Child catalog");
console.log("Child assertion succeed!");

total = calculate("Boy");
assert(total === 1020, "Unexpected result for Boy catalog");
console.log("Boy assertion succeed!");

total = calculate("Girl");
assert(total === 1064, "Unexpected result for Girl catalog");
console.log("Girl assertion succeed!");


function calculate(userType) {

    let user = new PageUser(userType);
    let catalog = new PageCatalog(user);
    let products = catalog.getProducts();

    let product;
    let total = 0;

    while (!products.isEmpty()) {
        product = products.current();
        total += product.getAmountAfterDiscount(user.getUserType());
    }

    return total;
}