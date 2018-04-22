const URL = "https://phonebook-7958e.firebaseio.com/phonebook";

$('#btnLoad').on('click', loadData);
function loadData() {
    $.ajax({
        method: 'GET',
        url: URL + '.json',
    }).then(handleSuccess).catch(handleError);
    function handleSuccess(res) {
        $('#phonebook').empty();
        for (var key in res) {
            $('#phonebook').append(
            $(`<li>${res[key].name}: ${res[key].phone} </li>`)
                .append($('<a href="#">[Delete]</a>').on('click', function () {
                    $.ajax({
                        method: "DELETE",
                        url: URL + "/" + key + ".json"
                    }).then(loadData).catch(handleError);
                }))
            )
        }
    }
}

$('#btnCreate').on('click', createData);
function createData() {
    let name = $('#person').val();
    let phone = $('#phone').val();
    let postData = JSON.stringify({name, phone});

    $.ajax({
        method: "POST",
        url: URL + ".json",
        data: postData,
        success: loadData,
        error: handleError
    })
    $('#person').val('');
    $('#phone').val('');
}

function handleError(err) {
    console.log('Error')
}