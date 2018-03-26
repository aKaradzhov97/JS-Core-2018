function extractText() {
    var arr = $('#items').find('li').toArray()
        .map((li) => $(li).text()).join(', ');
    $('#result').text(arr);
}