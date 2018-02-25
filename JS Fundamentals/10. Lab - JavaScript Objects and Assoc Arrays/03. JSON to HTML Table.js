function fromJSONtoHTMLTable(strArr) {
    let arr = JSON.parse(strArr);
    let str = "<table>\n";
    str += "    <tr>";
    let keys = Object.keys(arr[0]);
    for (let key of keys) {
        str += `<th>${key}</th>`
    }
    str += `</tr>\n`
    //str += `<tr><th>${keys[0]}</th><th>${keys[1]}</th></tr>\n`;
    for (let obj of arr) {
        str += `    <tr>`;
        for (var i = 0; i < keys.length; i++) {
            str += `<td>${escapeHtml(obj[keys[i]] + "")}</td>`
        }
        str += `</tr>\n`;
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