import renderFruit from '../products/renderShirts.js';
import renderTableRow from './shopping cart/index.html';
import cartData

const test = QUnit.test;

QUnit.module('Render Shirts');

test('Renders Table Row', assert => {
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
    

    const appleOrder = {
        id: 'apple',
        quantity: 4,
    };
    
    const expected = <tr><td>apple</td><td>4</td><td>$1.00</td><td>$4.00</td></tr>

    const fruitElementTr = renderTableRow(apple, appleOrder);
    const stringHtmleOfFruitElement = fruitElementTr.outerHTML;


    // act
    const dom = renderFruit(apple);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});