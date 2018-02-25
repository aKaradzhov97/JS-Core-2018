function formFiller(username, email, phone, data) {
    data.forEach(line => {
        line = line.replace(/<([!@+])[a-zA-Z]+([!@+])>/g, replacer);
        console.log(line);
    })
    function replacer(match, pl) {
        switch (pl) {
            case "!":
                return username;
            case "@":
                return email;
            case "+":
                return phone;
        }
    }
}