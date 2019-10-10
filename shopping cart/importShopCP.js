import allShirts from './products/renderShirts.js.js';
import renderShoppingCart from './rproducts/renderShoppingCart.js.js';

const list = document.getElementById('shirts');

for (let i = 0; i < allShirts.length; i++) {
    const shirt = allShirts[i];
    const dom = renderShoppingCart(shirt);
    list.appendChild(dom);
}