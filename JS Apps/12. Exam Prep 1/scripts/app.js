$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', getWelcomePage);
        this.get('index.html', getWelcomePage);

        //REGISTER
        this.post('#/register', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPass = ctx.params.repeatPass;

            //Validation
            if (!(/^[A-Za-z]{3,}$/.test(username))) {
                notify.showError('Password should be at least 3 characters long and contain only english alphabet characters!');
                return;
            } else if (!(/^[A-Za-z\d]{6,}$/.test(password))) {
                notify.showError('Password should be at least 6 characters long and contain only english alphabet characters and digits!');
            } else if (repeatPass !== password) {
                notify.showError('Passwords do not match!');
            } else {
                auth.register(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('User registration successful!');
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.handleError);
            }
            //End of validation
        });
        //LOGIN
        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;

            if (username === "" || password === "") {
                notify.showError('All fields should be non-empty!');
            } else {
                auth.login(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('Login successful!');
                        ctx.redirect('#/catalog');
                    }).catch(notify.handleError);
            }


        });
        //LOGOUT
        this.get('#/logout', function (ctx) {
            auth.logout()
                .then(() => {
                    sessionStorage.clear();
                    ctx.redirect('#/home');
                }).catch(notify.handleError);
        });


        //CRUD Operations
        //View catalog
        this.get('#/catalog', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            posts.getAllPosts()
                .then((posts) => {
                    posts.forEach((p, index) => {
                        p.rank = index + 1;
                        p.date = calcTime(p._kmd.ect);
                        p.isAuthor = p._acl.creator === sessionStorage.getItem('userId');
                    });

                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.posts = posts;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs',
                        postList: './templates/posts/postList.hbs',
                        post: './templates/posts/post.hbs'
                    }).then(function () {
                        this.partial('./templates/posts/catalogPage.hbs');
                    }).catch(notify.handleError);
                });
        });

        //Create post
        this.get('#/create/post', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                navigation: './templates/common/navigation.hbs',
            }).then(function () {
                this.partial('./templates/crud/createPage.hbs');
            }).catch(notify.handleError);
        });
        this.post('#/create/post', (ctx) => {
            let author = sessionStorage.getItem('username');
            let title = ctx.params.title;
            let description = ctx.params.description;
            let url = ctx.params.url;
            let imageUrl = ctx.params.imageUrl;

            if (title === '') {
                notify.showError('Title is required!');
            } else if (url === '') {
                notify.showError('URL is required!');
            } else if (!url.startsWith('http://')) {
                notify.showError('URL is not valid link!');
            } else {
                posts.createPost(author, title, description, url, imageUrl)
                    .then(() => {
                        notify.showInfo('Post created!');
                        ctx.redirect('#/catalog');
                    }).catch(notify.handleError);
            }
        })

        //Edit post
        this.get('#/edit/post/:postId', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let postId = ctx.params.postId;

            posts.getPostById(postId)
                .then((post) => {
                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.post = post;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs'
                    }).then(function () {
                        this.partial('./templates/crud/editPage.hbs');
                    }).catch(notify.handleError);
                })
        });
        this.post('#/edit/post', (ctx) => {
            let postId = ctx.params.postId;
            let author = sessionStorage.getItem('username');
            let title = ctx.params.title;
            let description = ctx.params.description;
            let url = ctx.params.url;
            let imageUrl = ctx.params.imageUrl;

            if (title === '') {
                notify.showError('Title is required!');
            } else if (url === '') {
                notify.showError('URL is required!');
            } else if (!url.startsWith('http://')) {
                notify.showError('URL is not valid link!');
            } else {
                posts.editPost(postId, author, title, description, url, imageUrl)
                    .then(() => {
                        notify.showInfo(`Post ${title} edited!`);
                        ctx.redirect('#/catalog');
                    }).catch(notify.handleError)
            }
        });

        //Delete post
        this.get('#/delete/post/:postId', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let postId = ctx.params.postId;

            posts.deletePost(postId)
                .then(() => {
                    ctx.redirect('#/catalog');
                    showInfo('Post deleted!');
                }).catch(notify.handleError);
        });

        //Get MY POSTS
        this.get('#/posts', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            posts.getMyPosts(sessionStorage.getItem('username'))
                .then((posts) => {
                    posts.forEach((p, index) => {
                        p.rank = index + 1;
                        p.date = calcTime(p._kmd.ect);
                        p.isAuthor = p._acl.creator === sessionStorage.getItem('userId');
                    });

                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.posts = posts;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs',
                        postList: './templates/posts/postList.hbs',
                        post: './templates/posts/post.hbs'
                    }).then(function () {
                        this.partial('./templates/crud/myPostsPage.hbs');
                    }).catch(notify.handleError);
                })
        });


        //Comment section
        this.get('#/details/:postId', (ctx) => {
            let postId = ctx.params.postId;

            const postPromise = posts.getPostById(postId);
            const allCommentsPromise = comments.getPostComments(postId);

            Promise.all([postPromise, allCommentsPromise])
                .then(([post, comments]) => {
                    post.date = calcTime(post._kmd.ect);
                    post.isAuthor = post._acl.creator === sessionStorage.getItem('userId');
                    comments.forEach((c) => {
                        c.date = calcTime(c._kmd.ect);
                        c.commentAuthor = c._acl.creator === sessionStorage.getItem('userId');
                    });

                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.post = post;
                    ctx.comments = comments;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs',
                        postDetails: './templates/details/postDetails.hbs',
                        comment: './templates/details/comment.hbs'
                    }).then(function () {
                        this.partial('./templates/details/postDetailsPage.hbs');
                    })
                }).catch(notify.handleError);


        });
        this.post('#/create/comment', (ctx) => {
            let author = sessionStorage.getItem('username');
            let content = ctx.params.content;
            let postId = ctx.params.postId;

            if (content === "") {
                notify.showError(`Cannot add empty comment!`);
                return;
            }

            comments.createComment(postId, content, author)
                .then(() => {
                    notify.showInfo(`Comment created!`);
                    ctx.redirect(`#/details/${postId}`);
                }).catch(notify.showError);
        });
        this.get('#/comment/delete/:commentId/post/:postId', (ctx) => {
            let commentId = ctx.params.commentId;
            let postId = ctx.params.postId;

            comments.deleteComment(commentId)
                .then(() => {
                    ctx.redirect(`#/details/${postId}`);
                    notify.showInfo('Comment deleted!');
                }).catch(notify.handleError);
        })

        function getWelcomePage(ctx) {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                }).then(function () {
                    this.partial('./templates/welcomeAnonymous.hbs')
                })
            } else {
                ctx.redirect('#/catalog');
            }
        }
        function calcTime(dateIsoFormat) {
            let diff = new Date - (new Date(dateIsoFormat));
            diff = Math.floor(diff / 60000);
            if (diff < 1) return 'less than a minute';
            if (diff < 60) return diff + ' minute' + pluralize(diff);
            diff = Math.floor(diff / 60);
            if (diff < 24) return diff + ' hour' + pluralize(diff);
            diff = Math.floor(diff / 24);
            if (diff < 30) return diff + ' day' + pluralize(diff);
            diff = Math.floor(diff / 30);
            if (diff < 12) return diff + ' month' + pluralize(diff);
            diff = Math.floor(diff / 12);
            return diff + ' year' + pluralize(diff);
            function pluralize(value) {
                if (value !== 1) return 's';
                else return '';
            }
        }
    });
    app.run();
});