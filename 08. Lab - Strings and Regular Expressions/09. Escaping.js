function escaping(arr) {
    console.log("<ul>");
    for (var i = 0; i < arr.length; i++) {
        let str = arr[i];
        str = escapeHtml(str);
        console.log(`<li>${str}</li>`)
    }
    console.log("</ul>");

    function escapeHtml(unsafeStr) {
        return unsafeStr
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}