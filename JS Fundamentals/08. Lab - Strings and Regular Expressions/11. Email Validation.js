function simpleEmailValidation(str) {
    const regex = /^[a-zA-Z0-9]+\@[a-zA-Z]+(\.[a-zA-Z]+)+$/gm;

    if (regex.test(str)) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}