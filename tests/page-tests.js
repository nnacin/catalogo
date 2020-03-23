// TODO check the name, price, correct items for each user type

"use strict";

let PageCatalog = require("../src/page/page-catalog");
let PageUser = require("../src/page/page-user");
let assert = require("assert");


let { type, discount, limit, products, productPrices } = checkUser("Child");
assert(type === "Child", "Unexpected result for Child user type");
assert(discount === 20, "Unexpected result for Child user discount");
assert(limit === 49, "Unexpected result for Child user limit");
assert.deepEqual(products, ["PS5", "Kit Lego", "Deportivas"], "Unexpected result for Child user products");
assert.deepEqual(productPrices, [400, 140, 120], "Unexpected result for Child user product prices before discount");
console.log("Child assertion succeed!");

({ type, discount, limit, products, productPrices } = checkUser("Boy"));
assert(type === "Boy", "Unexpected result for Boy suer");
assert(discount === 50, "Unexpected result for Boy user discount");
assert(limit === 300, "Unexpected result for Boy user limit");
assert.deepEqual(products, ["Laptop", "Tablet", "Móvil"], "Unexpected result for Boy user products");
assert.deepEqual(productPrices, [1000, 300, 220], "Unexpected result for Boy user product prices before discount");
console.log("Boy assertion succeed!");

({ type, discount, limit, products, productPrices } = checkUser("Girl"));
assert(type === "Girl", "Unexpected result for Girl user");
assert(discount === 30, "Unexpected result for Girl user discount");
assert(limit === 200, "Unexpected result for Girl user limit");
assert.deepEqual(products, ["Laptop", "Tablet", "Móvil"], "Unexpected result for Girl user products");
assert.deepEqual(productPrices, [1000, 300, 220], "Unexpected result for Girl user product prices before discount");
console.log("Girl assertion succeed!");


function checkUser(userType) {
    const user = new PageUser(userType);
    const catalog = new PageCatalog(user);
    const products = catalog.getProducts();

    
    const userProducts = [];
    const userProductPrices = [];
    let product;

    while (!products.isEmpty()) {
        product = products.current();
        userProducts.push(product.getName())
        userProductPrices.push(product.getPrice())
    }

    return { 
        type: user.getUserType(), 
        discount: user.getDiscount(), 
        limit: user.getLimit(), 
        products: userProducts,
        productPrices: userProductPrices
     };
}
