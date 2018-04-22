function attachEvents() {
    $('#btnLoadTowns').on('click', renderTowns);
    async function renderTowns() {
        let inputTowns = $('#towns').val();
        inputTowns = inputTowns.split(', ');

        //Template
        let towns = $('#towns-template').html();
        let townsTemplate = Handlebars.compile(towns);
        let obj = {
            objTowns: inputTowns
        }
        let result = townsTemplate(obj);
        $('#root').empty();
        $('#root').append(result);
    }
}