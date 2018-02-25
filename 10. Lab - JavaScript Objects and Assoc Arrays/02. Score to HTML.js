function scoreToHTML(strArr) {
    let arr = JSON.parse(strArr);
    let str = "<table>\n";
    let keys = Object.keys(arr[0]);
    str += `<tr><th>${keys[0]}</th><th>${keys[1]}</th></tr>\n`;
    for (let obj of arr) {
        str += `    <tr><td>${escapeHtml(obj[keys[0]] + '')}</td><td>${escapeHtml(obj[keys[1]] + '')}</td></tr>\n`;
    }
    str += "</table>";
    console.log(str);
    function escapeHtml(unsafeStr) {
        return unsafeStr
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}