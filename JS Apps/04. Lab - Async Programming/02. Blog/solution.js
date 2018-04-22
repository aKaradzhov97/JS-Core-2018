function attachEvents() {
    const URL = `https://baas.kinvey.com/appdata/kid_SkOrrIVqz/`;
    const USERNAME = `peter`;
    const PASSWORD = `p`;
    const BASE_64 = btoa(USERNAME + ":" + PASSWORD);
    const AUTH = {'Authorization': 'Basic ' + BASE_64};
    let posts = {};

    $('#btnLoadPosts').on('click', loadPosts);
    $('#btnViewPost').on('click', loadComment);

    function loadPosts() {
        $.ajax({
            method: "GET",
            url: URL + `posts`,
            headers: AUTH
        }).then(function (res) {
            $('#posts').empty();
            for (let post of res) {
                $('#posts').append($(`<option value="${post._id}">${post.title}</option>`))
                posts[post._id] = post.body;
            }
        }).catch(function (err) {
            console.log(err);
        })
    }
    function loadComment() {
        let postId = $('#posts').val();
        let postTitle = $('#posts').find('option:selected').text();
        $.ajax({
            method: "GET",
            url: `${URL}comments/?query={"post_id":"${postId}"}`,
            headers: AUTH
        }).then(function (res) {
            $('#post-comments').empty();

            for (let com of res) {
                $('#post-comments').append($(`<li>${com.text}</li>`))
            }
            $('#post-title').text(postTitle);
            $('#post-body').text(posts[postId]);
        }).catch(function (err) {
            console.log(err);
        });
    }
}