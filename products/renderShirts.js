function renderShirts(shirt) {
    const li = document.createElement('li');
    li.title = shirt.title;
    li.className = shirt.category;

  
    const h3 = document.createElement('h3');
    h3.id = shirt.id;
    h3.textContent = shirt.title;
    li.appendChild(h3);


    const img = document.createElement('img');
    img.src = shirt.image;
    img.alt = shirt.name + ' image';
    li.appendChild(img);


    const p = document.createElement('p');
    p.className = 'price';


   // const usd = '$' + shirt.price.toFixed(2);
    const usd = shirt.price.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });
    p.textContent = usd;

    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = shirt.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderShirts;