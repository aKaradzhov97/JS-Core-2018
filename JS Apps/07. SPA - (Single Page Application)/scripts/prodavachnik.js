function startApp() {
    //APP Constants
    const APPKEY = `kid_B1lVLVT5G`;
    const APPSECRET = `170dca2031e54d1aac846e57b31c90ab`;
    const BASEURL = `https://baas.kinvey.com/`;

    //Onload >>
    showView('home');
    $('.menu-item').css('display', 'inline');
    setGreeting();

    //Buttons
    $('#buttonCreateAd').click(createAd);
    $('#buttonRegisterUser').click(register)
    $('#buttonLoginUser').click(login);
    
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
                $('#viewHome').show();
                break;
            case 'ads':
                getAds();
                $('#viewAds').show();
                break;
            case 'create':
                $('#viewCreateAd').show();
                break;
            case 'edit':
                $('#viewEditAd').show();
                break;
            case 'info':
                $('#infoBox').show();
                break;
            case 'error':
                $('#errorBox').show();
                break;
            case 'loading':
                $('#loadingBox').show();
                break;
        }
    }
    //----NavBar buttons events.
    $('#linkHome').click(() => showView('home'));
    $('#linkLogin').click(() => showView('login'));
    $('#linkRegister').click(() => showView('register'));
    $('#linkListAds').click(() => showView('ads'));
    $('#linkCreateAd').click(() => showView('create'));
    $('#linkLogout').click(logout);
    
    //USER FUNCTIONS
    function register(ev) {
        ev.preventDefault();

        let username = $('#formRegister').find('input[name="username"]').val()
        let password = $('#formRegister').find('input[name="passwd"]').val()

        if (username.length === 0) {
            //showError('Username cannot be empty!');
            return;
        }
        if (password.length === 0) {
            //showError('Password cannot be empty!');
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
    function login(ev) {
        ev.preventDefault();

        let username = $('#formLogin').find('input[name="username"]').val()
        let password = $('#formLogin').find('input[name="passwd"]').val()

        if (username.length === 0) {
            //showError('Username cannot be empty!');
            return;
        }
        if (password.length === 0) {
            //showError('Password cannot be empty!');
            return;
        }
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
                setStorage(data);
                showInfo('Login Successful!');
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
    function setStorage(data) {
        //Set authtoken & username in browser local storage for later use.
        localStorage.setItem('authtoken', data._kmd.authtoken);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data._id);
        showView('ads');
    }
    function setGreeting() {
        let username = localStorage.getItem('username');
        if (username !== null) {
            //Html for logged in user.
            $('#loggedInUser').text(`Welcome, ${username}!`);

            //Show correct Navigation buttons when logged in.
            $('#linkLogin').hide();
            $('#linkRegister').hide();
            $('#linkListAds').show();
            $('#linkCreateAd').show();
            $('#linkLogout').show();
        } else {
            $('#loggedInUser').text(``);

            //Show correct Navigation buttons when logged of.
            $('#linkLogin').show();
            $('#linkRegister').show();
            $('#linkListAds').hide();
            $('#linkCreateAd').hide();
            $('#linkLogout').hide();
        }
    }

    //CATALOG >>> CRUD Operations
    //Create
    function createAd() {
        let title = $('#formCreateAd').find('input[name="title"]').val();
        let description = $('#formCreateAd').find('textarea[name="description"]').val();
        let dateOfPublish = $('#formCreateAd').find('input[name="datePublished"]').val();
        let price = $('#formCreateAd').find('input[name="price"]').val();
        let publisher = localStorage.getItem('username');

        //Validation
        if (title.length === 0) {
            showError('Title cannot be empty!');
            return;
        }
        if (description.length === 0) {
            showError('Description cannot be empty!');
            return;
        }
        if (dateOfPublish.length === 0) {
            showError('Date cannot be empty!');
            return;
        }
        if (price.length === 0) {
            showError('Price cannot be empty or text!');
            return;
        }
        //End of Validation

        let req = {
            method: 'POST',
            url: BASEURL + 'appdata/' + APPKEY + '/advertisements',
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
            },
            data: {
                title,
                description,
                publisher,
                dateOfPublish,
                price
            },
            success: createSuccess,
            error: handleError
        }

        $.ajax(req);

        function createSuccess(data) {
            $('#viewCreateAd').find('form').trigger('reset');
            showView('ads');
            showInfo('Ad created successfully!');
        }
    }
    //Retrieve
    function getAds() {
        //CleanUp table body before loading data.
        let table = $('#ads').find('table');
        table.empty();

        let req = {
            method: 'GET',
            url: BASEURL + 'appdata/' + APPKEY + '/advertisements',
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
            },
            success: displayAds,
            error: handleError
        }

        $.ajax(req);

        function displayAds(data) {
            //Table columns
            let firstRow = $('<tr>');
            firstRow.append(`<th>Title</th>`);
            firstRow.append(`<th>Description</th>`);
            firstRow.append(`<th>Publisher</th>`);
            firstRow.append(`<th>Date published</th>`);
            firstRow.append(`<th>Price</th>`);
            firstRow.append(`<th>Actions</th>`);

            firstRow.appendTo(table);

            for (let ad of data) {
                let actions = [];
                if (ad._acl.creator === localStorage.getItem('userId')) {
                    actions.push($('<button>Edit</button>').click(() => editAd(ad)));
                    actions.push($('<button>Delete</button>').click(() => deleteAd(ad._id)));
                }
                let row = $('<tr>');
                row.append(`<td>${ad.title}</td>`);
                row.append(`<td>${ad.description}</td>`);
                row.append(`<td>${ad.publisher}`);
                row.append(`<td>${ad.dateOfPublish}</td>`);
                row.append(`<td>${ad.price}</td>`);
                row.append($('<td>').append(actions));
                row.appendTo(table);
            }
        }
    }
    //Update
    function editAd(ad) {
        showView('edit');
        $('#formEditAd').find('input[name="title"]').val(ad.title);
        $('#formEditAd').find('textarea[name="description"]').val(ad.description);
        $('#formEditAd').find('input[name="datePublished"]').val(ad.dateOfPublish);
        $('#formEditAd').find('input[name="price"]').val(ad.price);

        $('#buttonEditAd').click(edit);

        function edit() {
            let editedAd = {
                title: $('#formEditAd').find('input[name="title"]').val(),
                description: $('#formEditAd').find('textarea[name="description"]').val(),
                publisher: localStorage.getItem('username'),
                dateOfPublish: $('#formEditAd').find('input[name="datePublished"]').val(),
                price: $('#formEditAd').find('input[name="price"]').val()
            }
            //Validation
            if (editedAd.title.length === 0) {
                showError('Title cannot be empty!');
                return;
            }
            if (editedAd.description.length === 0) {
                showError('Description cannot be empty!');
                return;
            }
            if (editedAd.dateOfPublish.length === 0) {
                showError('Description cannot be empty!');
                return;
            }
            if (editedAd.price.length === 0) {
                showError('Price cannot be empty or text!');
                return;
            }
            //End of validation

            let req = {
                method: 'PUT',
                url: BASEURL + 'appdata/' + APPKEY + '/advertisements/' + ad._id,
                headers: {
                    'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                },
                data: editedAd,
                success: editSuccess,
                error: handleError
            }

            $.ajax(req);

            function editSuccess(data) {
                showView('ads');
                showInfo('Ad successfully edited!')
            }
        }
    }
    //Delete
    function deleteAd(id) {
        let req = {
            method: 'DELETE',
            url: BASEURL + 'appdata/' + APPKEY + '/advertisements/' + id,
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
            },
            success: deleteSuccess,
            error: handleError
        }
        $.ajax(req);
        function deleteSuccess(data) {
            showInfo('Successfully deleted ad!');
            showView('ads');
        }
    }
}