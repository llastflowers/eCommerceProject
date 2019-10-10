import renderCartRow from './render-table-row.js'

const test = QUnit.test;

QUnit.module('Render Shopping Card');

test('Renders Shopping Cart Table Rows'), assert => {

    const LineItem = {
        id: 'blue-shirt',
        quantity: 3

    };

};

const expected = '<li 'id="blue-shirt" quantity= 3;></li>;