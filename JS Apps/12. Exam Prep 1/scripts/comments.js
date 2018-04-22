let comments = (() => {
    function getPostComments(postId) {
        const ENDPOINT = `comments?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`;

        return requester.get('appdata', ENDPOINT, 'kinvey');
    }

    function createComment(postId, content, author) {
        const ENDPOINT = `comments`;
        let data = {postId, content, author};

        return requester.post('appdata', ENDPOINT, 'kinvey', data);
    }

    function deleteComment(commentId) {
        const ENDPOINT = `comments/${commentId}`;

        return requester.remove('appdata', ENDPOINT, 'kinvey');
    }

    return {
        getPostComments,
        createComment,
        deleteComment
    }
})();