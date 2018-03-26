function addItem() {
    let text = document.querySelector('#newItemText');
    let value = document.getElementById('newItemValue');

    let dropdown = document.getElementById('menu');
    let option = document.createElement('option');
    option.value = value.value;
    option.text = text.value;
    dropdown.appendChild(option);

    text.value = '';
    value.value = '';
}