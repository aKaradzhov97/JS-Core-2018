class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }
    get cliendId() {
        return this._clientId;
    }
    set clientId(newClientId) {
        let IDRgx = /^([0-9]{6})$/;
        if (!IDRgx.test(newClientId) || typeof newClientId !== 'string') {
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = newClientId;
    }
    get email() {
        return this._email;
    }
    set email(newEmail) {
        let EmailRgx = /(.+)@(.+){2,}\.(.+){2,}/;
        if (!EmailRgx.test(newEmail)) {
            throw new TypeError('Invalid e-mail');
        }
        this._email = newEmail;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(newFirstName) {
        if (newFirstName.length > 20 || newFirstName.length < 3) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        let firstNameRgx = /^[A-Za-z]+$/;
        if (!firstNameRgx.test(newFirstName)) {
            throw new TypeError('First name must contain only Latin characters')
        }
        this._firstName = newFirstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(newLastName) {
        if (newLastName.length > 20 || newLastName.length < 3) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        let lastNameRgx = /^[A-Za-z]+$/;
        if (!lastNameRgx.test(newLastName)) {
            throw new TypeError('Last name must contain only Latin characters')
        }
        this._lastName = newLastName;
    }
}