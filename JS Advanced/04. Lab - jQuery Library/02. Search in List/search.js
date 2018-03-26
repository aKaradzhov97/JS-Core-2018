function search() {
    let targetValue = $('#searchText').val();
    let counter = 0;
    $('#towns li').each((ind, el) => {
        if (el.textContent.includes(targetValue)) {
            $(el).css('font-weight', 'bold');
            counter++;
        } else {
            $('el').css('font-weight', '');
        }
    })
    $('#result').text(counter + ` matches found.`);
}