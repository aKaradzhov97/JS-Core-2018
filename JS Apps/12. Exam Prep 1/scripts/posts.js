let posts = (() => {

    function getAllPosts() {
        const ENDPOINT = 'posts?query={}&sort={"_kmd.ect": -1}';
        return requester.get('appdata', ENDPOINT, 'kinvey');
    }
    function createPost(author, title, description, url, imageUrl) {
        let data = { author, title, description, url, imageUrl };

        return requester.post('appdata', 'posts', 'kinvey', data);
    }
    function editPost(postId, author, title, description, url, imageUrl) {
        const ENDPOINT = `posts/${postId}`;
        let data = { author, title, description, url, imageUrl };

        return requester.update('appdata', ENDPOINT, 'kinvey', data);
    }
    function deletePost(postId) {
        const ENDPOINT = `posts/${postId}`;

        return requester.remove('appdata', ENDPOINT, 'kinvey');
    }
    function getMyPosts(username) {
        const ENDPOINT = `posts?query={"author":"${username}"}&sort={"_kmd.ect": -1}`;

        return requester.get('appdata', ENDPOINT, 'kinvey');
    }
    function getPostById(postId) {
        const ENDPOINT = `posts/${postId}`;

        return requester.get('appdata', ENDPOINT, 'kinvey');
    }
    return {
        getAllPosts,
        createPost,
        editPost,
        deletePost,
        getPostById,
        getMyPosts
    }
})();