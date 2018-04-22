function loadCommits() {
    let username = $('#username').val();
    let repoName = $('#repo').val();
    $.ajax({
        method: "GET",
        url: `https://api.github.com/repos/${username}/${repoName}/commits`
    }).then(function (res) {
        $('#commits').empty();
        for (let obj of res) {
            $('#commits').append($(`<li>${obj.commit.author.name}: ${obj.commit.message}</li>`))
        }
    }).catch(function (err) {
        $('#commits').append($(`<li>Error: ${err.status} (${err.statusText})</li>`))
    })
    $('#username').val('');
    $('#repo').val('');
}