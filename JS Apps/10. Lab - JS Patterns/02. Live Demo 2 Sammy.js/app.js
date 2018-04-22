$(() => {
    const app = Sammy('#main', function () {
        //USE HANDLEBARS
        this.use('Handlebars', 'hbs');

        this.get('#/index.html', (context) => {
            context.swap('<h1>Home Page</h1>');
        })
        this.get('#/about.html', function () {
            this.swap('<h1>About Page</h1>');
        })

        this.get('#/hello/:name', (ctx) => {
            ctx.title = 'Hello!';
            ctx.name = ctx.params.name;
            ctx.partial('./templates/greetings.hbs');
        })
    })
    app.run();
})