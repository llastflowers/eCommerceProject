import renderCartRow from '../products/render-table-row.js';

const test = QUnit.test;

QUnit.module('Render Shopping Card');

test('Renders Shopping Cart Table Rows', assert => {

    const lineItem = {
        id: 'blue-shirt',
        quantity: 3
    };

    const expected = '<li id="blue-shirt" quantity= 3;></li>';


    const cartRowElement = renderCartRow(lineItem);
    const stringHtmlElement = cartRowElement.outerHTML;


    assert.equal(stringHtmlElement, expected);

});