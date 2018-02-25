function extractUsernameByEmail(arr) {
    let users = arr.map(s => s.split('@'));
    let result = [];

    for (let user of users) {
        let [name, domain] = user;
        let domainLetters = domain.split(".");
        domainLetters = domainLetters.map(e => e[0]);
        let username = name + "." + domainLetters.join('');
        result.push(username);
    }
    console.log(result.join(", "));
}