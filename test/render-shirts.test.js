import renderFruit from '../products/renderShirts.js';

const test = QUnit.test;

QUnit.module('Render Shirts');

test('Renders a Shirt', assert => {
    // arrange
    const apple = {
        code: 'apple',
        name: 'Red Apple',
        image: 'apple.png',
        description: 'A sweet, delicious, forbidden-to-some treat',
        category: 'tree-fruit',
        price: 1.00,
        cost: 0.25
    };
    const expected = '<li title="A sweet, delicious, forbidden-to-some treat"><h3>Red Apple</h3><img src="../assets/apple.png" alt="Red Apple image"><p class="price">$1.00<button value="apple">Add</button></p></li>';
    
    // act
    const dom = renderFruit(apple);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});