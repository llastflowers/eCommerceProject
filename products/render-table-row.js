function renderCartRow(shirt) {
   // const p = document.createElement('p');
//    p.className = 'quantity';
    const makeTd = document.getElementById('td');
    

    const td = document.createElement('td');
    td.id = shirt.id;
    td.quantity = 3;
    td.appendChild(td);
    

    return td;
}

export default renderCartRow; 