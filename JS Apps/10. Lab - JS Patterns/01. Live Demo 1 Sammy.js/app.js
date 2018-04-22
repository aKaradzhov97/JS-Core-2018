$(() => {
    const app = Sammy('#main', function () {
        this.get('#/index.html', (context) => {
            context.swap('<h1>Home Page</h1>');
        })
        this.get('#/about.html', function () {
            this.swap('<h1>About Page</h1>');
        })
        this.get('#/contact.html', function () {
            this.swap('<h1>Contact Page</h1>');
        })
        //Get specific element in DB by id.
        this.get('#/books/:bookId', (ctx) => {
            let bookId = ctx.params.bookId;
            console.log(bookId);
        })

        this.get('#/login', (ctx) => {
            ctx.swap('<form action="#/login" method="post">' +
                'User: <input name="user" type="text">' +
                'Pass: <input name="pass" type="password">' +
                '<input type="submit" value="Login">' +
                '</form>')
        })

        this.post('#/login', (ctx) => {
            //USE NAME ATTRIBUTE FROM HTML
            console.log(ctx.params.user);
            console.log(ctx.params.pass);
        })
    })
    app.run();
})