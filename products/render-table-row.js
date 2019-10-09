export default () => {
    const tableRow = document.createElement('tr');

    const columnOne = document.createElement('td');
    columnOne.textContent = 'apple';

    const columnTwo = document.createElement('td');
    columnTwo.textContent = 'apple';

    const columnThree = document.createElement('td');
    columnThree.textContent = 'apple';

    const columnFour = document.createElement('td');
    columnFour.textContent = 'apple';
    


    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);



    return tableRow;
};