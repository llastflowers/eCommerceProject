function renderCartRow(shirt) {
    const p = document.createElement('p');
    p.className = 'price';
    

    const li = document.createElement('li');
    li.id = shirt.title;
    li.quantity = 3;
    li.appendChild(p);
    

    return li;
}

export default renderCartRow;