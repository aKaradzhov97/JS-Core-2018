function increment(selector) {
    let element = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    //Now time to form each of those elements

    //TextArea:
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);

    //Buttons:
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    //List:
    list.addClass('results');

    //Now attaching events to the buttons:
    $(incrementBtn).on('click', increment);
    $(addBtn).on('click', add);

    function increment() {
        textArea.val(+textArea.val() + 1);
    }
    function add() {
        let listItem = $(`<li>${textArea.val()}</li>`);
        listItem.appendTo(list);
    }

    //Now we have to append everything to empty fragment:
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    //Last - append the fragment to the input element:
    element.append(fragment);
}