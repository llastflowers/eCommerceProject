import renderShirts from '../products/renderShirts.js';

const test = QUnit.test;

QUnit.module('Render Shirts');

test('Renders Table Row', assert => {
    // arrange
    const blueShirt = {
        id: 'blue-shirt',
        title: 'Blue Shirt',
        image: '../assets/blue-shirt.jpg',
        description: 'A nice blue shirt.',
        category: 'shirts',
        price: 25.00,
        cost: 7.50,
    };
    
    const expected = '<li title="Blue Shirt" class="shirts"><h3 id="blue-shirt">Blue Shirt</h3><img src="../assets/blue-shirt.jpg" alt="undefined image"><p class="price">$25.00<button value="undefined">Add</button></p></li>';
    

    // act
    const shirtListElement = renderShirts(blueShirt);
    const stringHtmlElement = shirtListElement.outerHTML;
    
    // assert
    assert.equal(stringHtmlElement, expected);
});


test('Renders Table Row', assert => {
    // arrange
    const redShirt = {
        id: 'red-shirt',
        title: 'Red Shirt',
        image: '../assets/red-shirt.jpg',
        description: 'A nice red shirt.',
        category: 'shirts',
        price: 25.00,
        cost: 7.50,
    };
    
    const expected = '<li title="Red Shirt" class="shirts"><h3 id="red-shirt">Red Shirt</h3><img src="../assets/red-shirt.jpg" alt="undefined image"><p class="price">$25.00<button value="undefined">Add</button></p></li>';


    // act
    const shirtListElement = renderShirts(redShirt);
    const stringHtmlElement = shirtListElement.outerHTML;
    
    // assert
    assert.equal(stringHtmlElement, expected);
});