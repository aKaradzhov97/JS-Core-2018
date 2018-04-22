function attachEvents() {
    $('#submit').on('click', submitFn);
    $('#refresh').on('click', refreshFn);
    
    function submitFn() {
        let author = $('#author').val();
        let content = $('#content').val();
        let time = Date.now();

        let postData = JSON.stringify({author, content, time});

        $.ajax({
            method: "POST",
            url: "https://messenger-f8f5a.firebaseio.com/messenger.json",
            data: postData
        })

        $('#author').val("");
        $('#content').val("");
    } 
    function refreshFn() {
        $.ajax({
            method: "GET",
            url: "https://messenger-f8f5a.firebaseio.com/messenger.json",
            success: handleSuccess
        })
    }
    function handleSuccess(res) {
        $('#messages').empty();
        for (var key in res) {
            $('#messages').append(`${res[key].author}: ${res[key].content}\n`);
        }
    }
}