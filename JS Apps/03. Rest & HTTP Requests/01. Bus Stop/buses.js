function getInfo() {
    let stopId = $('#stopId').val();
    $.ajax({
        method: 'GET',
        url: `https://judgetests.firebaseio.com/businfo/${stopId}.json`,
        success: handleSuccess,
        error: handleError
    })
    function handleSuccess(res) {
        //Clearing html content
        $('#stopName').empty();
        $('#buses').empty();

        $('#stopName').append(res.name);

        for (var key in res.buses) {
            $('#buses').append($(`<li>Bus ${key} arrives in ${res.buses[key]} minutes</li>`));
        }
    }
    function handleError(err) {
        //Clearing html content
        $('#stopName').empty();
        $('#buses').empty();

        $('#stopName').append('Error');
    }
}