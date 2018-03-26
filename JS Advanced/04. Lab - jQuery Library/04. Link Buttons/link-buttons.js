function attachEvents() {
    $('.button').on('click', (event) => {
        let target = $(event.target)
        let currentSelectedTarget = $('.selected');
        currentSelectedTarget.removeClass('selected')
        target.addClass('selected');
    })
}