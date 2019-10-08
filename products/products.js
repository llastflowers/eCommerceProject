import allShirts from './productArrays.js';
import renderShirts from './renderShirts.js';

const list = document.getElementById('shirts');

for (let i = 0; i < allShirts.length; i++) {
    const shirt = allShirts[i];
    const dom = renderShirts(shirt);
    list.appendChild(dom);
}