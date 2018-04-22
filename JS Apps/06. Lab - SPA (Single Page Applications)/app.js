$(() => {
    setGreeting();
    //App constants:
    const APPKEY = `kid_rypFm1Dcz`;
    const APPSECRET = `f5cd4908a9274f3fbd46db9e55c72a35`;
    const BASEURL = `https://baas.kinvey.com/`;

    $('#linkHome').click(() => showView('home'));
    $('#linkLogin').click(() => showView('login'));
    $('#linkRegister').click(() => showView('register'));
    $('#linkBooks').click(() => showView('books'));
    $('#linkCreate').click(() => showView('create'));
    $('#linkLogout').click(logout);

    //Submit forms.
    $('#viewLogin').find('form').submit(login);
    $('#viewRegister').find('form').submit(register);
    $('#viewCreate').find('form').submit(createBook);

    //When Loading operation show/hide notification.
    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: () => $('#loadingBox').hide()
    })

    //When click info/error box - hide it.
    $('#infoBox').click((event) => $(event.target).hide());
    $('#errorBox').click((event) => $(event.target).hide());

    //Info boxes
    function showInfo(msg) {
        $('#infoBox').text(msg);
        $('#infoBox').show();
        setTimeout(() => $('#infoBox').fadeOut(), 3000);
    }

    function showError(msg) {
        $('#errorBox').text(msg);
        $('#errorBox').show();
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    //NAV & HEADER
    function showView(name) {
        $('section').hide();

        switch (name) {
            case 'home':
                $('#viewHome').show();
                break;
            case 'login':
                $('#viewLogin').show();
                break;
            case 'register':
                $('#viewRegister').show();
                break;
            case 'logout':
                $('#viewLogout').show();
                break;
            case 'books':
                getBooks();
                $('#viewBooks').show();
                break;
            case 'create':
                $('#viewCreate').show();
                break;
            case 'edit':
                $('#viewEdit').show();
                break;
        }
    }

    //USER FUNCTIONS
    function setGreeting() {
        //If user is logged in (localStorage): set the greeting!
        let username = localStorage.getItem('username');
        if (username !== null) {
            //Html for logged in user.
            $('#loggedInUser').text(`Welcome, ${username}!`);

            //Show correct Navigation buttons when logged in.
            $('#linkLogin').hide();
            $('#linkRegister').hide();
            $('#linkBooks').show();
            $('#linkCreate').show();
            $('#linkLogout').show();
        } else {
            $('#loggedInUser').text(``);

            //Show correct Navigation buttons when logged of.
            $('#linkLogin').show();
            $('#linkRegister').show();
            $('#linkBooks').hide();
            $('#linkCreate').hide();
            $('#linkLogout').hide();
        }
    }
    
    function setStorage(data) {
        //Set authtoken & username in browser local storage for later use.
        localStorage.setItem('authtoken', data._kmd.authtoken);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data._id);
        showView('books');
    }
    
    function login(ev) {
        //Prevent reloading page.
        ev.preventDefault();

        let username = $('#username').val();
        let password = $('#password').val();

        let req = {
            method: 'POST',
            url: BASEURL + 'user/' + APPKEY + '/login',
            headers: {
                'Authorization': `Basic ${btoa(APPKEY + ":" + APPSECRET)}`,
                'Content-Type': 'application/json' // Avoid 401 error - Bad credentials;
            },
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: (data) => {
                showInfo('Login Successful!');
                setStorage(data);
                setGreeting();
            },
            error: handleError
        }
        $.ajax(req);
    }

    function register(ev) {
        //Prevent reloading page.
        ev.preventDefault();

        let username = $('#regUsername').val();
        let password = $('#regPassword').val();
        let repeatPassword = $('#repRegPassword').val();

        if (username.length === 0) {
            showError('Username cannot be empty!');
            return;
        }

        if (password.length === 0) {
            showError('Password cannot be empty!');
            return;
        }

        if (password !== repeatPassword) {
            showError(`Passwords don't match!`)
            return;
        }

        let req = {
            method: 'POST',
            url: BASEURL + 'user/' + APPKEY,
            headers: {
                'Authorization': `Basic ${btoa(APPKEY + ":" + APPSECRET)}`,
                'Content-Type': 'application/json' // Avoid 401 error - Bad credentials;
            },
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: (data) => {
                showInfo('Registered Successfully!');
                setStorage(data);
                setGreeting();
            },
            error: handleError
        }
        $.ajax(req);
    }

    function logout() {
        let authToken = localStorage.getItem('authtoken');
        let req = {
            method: 'POST',
            url: BASEURL + 'user/' + APPKEY + '/_logout',
            headers: {
                'Authorization': `Kinvey ${authToken}`,
            },
            success: (data) => {
                logoutSuccess(data);
                showInfo('Logout successful!');
            },
            error: handleError
        }
        $.ajax(req);
        function logoutSuccess(data) {
            localStorage.clear();
            setGreeting();
            showView('home');
        }
    }

    //CATALOG >>> CRUD Operations
    //Create
    function createBook() {
        let title = $('#inputNewTitle').val();
        let author = $('#inputNewAuthor').val();
        let description = $('#inputNewDescription').val();

        //Validation
        if (title.length === 0) {
            showError('Title cannot be empty!');
            return;
        }
        if (author.length === 0) {
            showError('Author cannot be empty!');
            return;
        }
        //End of validation

        let req = {
            method: 'POST',
            url: BASEURL + 'appdata/' + APPKEY + '/books',
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
            },
            data: {
                title,
                author,
                description
            },
            success: createSuccess,
            error: handleError
        }

        $.ajax(req);

        function createSuccess(data) {
            $('#viewCreate').find('form').trigger('reset');
            showView('books');
        }
    }
    //Retrieve
    function getBooks() {
        //Cleanup Table content before loading data from request.
        let tbody = $('#viewBooks').find('table').find('tbody');
        tbody.empty();

        let req = {
            method: 'GET',
            url: BASEURL + 'appdata/' + APPKEY + '/books',
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
            },
            success: displayBooks,
            error: handleError
        }
        $.ajax(req);
        
        function displayBooks(data) {
            for (let book of data) {
                let actions = [];
                if (book._acl.creator === localStorage.getItem('userId')) {
                    actions.push($('<button>&#9998;</button>').click(() => editBook(book)));
                    actions.push($('<button>&#10006;</button>').click(() => deleteBook(book._id)));
                }
                let row = $('<tr>');
                row.append(`<td>${book.title}</td>`);
                row.append(`<td>${book.author}</td>`);
                row.append(`<td>${book.description}</td>`);
                row.append($('<td>').append(actions));
                row.appendTo(tbody);
            }
        }
    }
    //Update
    function editBook(book) {
        showView('edit');
        $('#inputTitle').val(book.title);
        $('#inputAuthor').val(book.author);
        $('#inputDescription').val(book.description);

        $('#viewEdit').find('form').submit(edit);

        function edit() {
            let editedBook = {
                title: $('#inputTitle').val(),
                author: $('#inputAuthor').val(),
                description: $('#inputDescription').val()
            }
            //Validation
            if (editedBook.title.length === 0) {
                showError('Title cannot be empty!');
                return;
            }
            if (editedBook.author.length === 0) {
                showError('Author cannot be empty!');
                return;
            }
            //End of validation

            let req = {
                method: 'PUT',
                url: BASEURL + 'appdata/' + APPKEY + '/books/' + book._id,
                headers: {
                    'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                },
                data: editedBook,
                success: editSuccess,
                error: () => {
                    console.log('error');
                }
            }

            $.ajax(req);
        }

        function editSuccess(data) {
            showInfo('Book edited!');
            showView('books');
        }
    }
    //Delete
    function deleteBook(id) {
        let req = {
            method: 'DELETE',
            url: BASEURL + 'appdata/' + APPKEY + '/books/' + id,
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
            },
            success: deleteSuccess,
            error: handleError
        }
        $.ajax(req);
        function deleteSuccess(data) {
            showInfo('Successfully deleted book!');
            showView('books');
        }
    }


})