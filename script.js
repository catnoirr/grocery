// document.getElementById('add-item').addEventListener('click', function() {
//     const item = document.getElementById('item').value;
//     const quantity = document.getElementById('quantity').value;

//     if (item && quantity) {
//         const table = document.getElementById('grocery-list').getElementsByTagName('tbody')[0];
//         const newRow = table.insertRow();

//         const itemCell = newRow.insertCell(0);
//         const quantityCell = newRow.insertCell(1);

//         itemCell.textContent = item;
//         quantityCell.textContent = quantity;

//         document.getElementById('item').value = '';
//         document.getElementById('quantity').value = '';
//     }
// });

// document.getElementById('generate-pdf').addEventListener('click', function() {
//     const element = document.getElementById('grocery-list');
    
//     const opt = {
//         margin:       1,
//         filename:     'grocery-list.pdf',
//         image:        { type: 'jpeg', quality: 0.98 },
//         html2canvas:  { scale: 2 },
//         jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

//     html2pdf().set(opt).from(element).save();
// });



document.getElementById('add-item').addEventListener('click', function() {
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;

    if (item && quantity) {
        const list = document.getElementById('grocery-list');
        const newItem = document.createElement('div');
        newItem.classList.add('grocery-item');

        const itemName = document.createElement('span');
        itemName.classList.add('item-name');
        itemName.textContent = item;

        const itemQuantity = document.createElement('span');
        itemQuantity.classList.add('item-quantity');
        itemQuantity.textContent = quantity;

         const deleteButton = document.createElement('span');
        deleteButton.classList.add('delete-item');
        // deleteButton.textContent = '❌';
        // const deleteButton = document.createElement('i');
        // deleteButton.classList.add('bx', 'bxs-message-alt-x', 'delete-item');
        deleteButton.addEventListener('click', function() {
            list.removeChild(newItem);
        });

        newItem.appendChild(itemName);
        newItem.appendChild(itemQuantity);
        newItem.appendChild(deleteButton);

        list.appendChild(newItem);

        document.getElementById('item').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('grocery-list').style.display='block'
    }
   
});

document.getElementById('generate-pdf').addEventListener('click', function() {
    const element = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = 'Grocery List';
    element.appendChild(title);

    const items = document.querySelectorAll('.grocery-item');
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('grocery-item');
        
        const itemName = document.createElement('span');
        itemName.classList.add('item-name');
        itemName.textContent = item.querySelector('.item-name').textContent;

        const itemQuantity = document.createElement('span');
        itemQuantity.classList.add('item-quantity');
        itemQuantity.textContent = item.querySelector('.item-quantity').textContent;

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemQuantity);

        element.appendChild(itemDiv);
    });

    const opt = {
        margin:       1,
        filename:     'grocery-list.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
});

