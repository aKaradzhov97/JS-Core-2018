function checkStringForGivenSubstring(mainStr, substring) {
    let index = mainStr.indexOf(substring);

    if (index !== -1) {
        console.log("true");
    } else {
        console.log("false");
    }
}