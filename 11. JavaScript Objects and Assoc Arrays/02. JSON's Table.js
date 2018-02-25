function JSONsTable(arr) {
    let html = `<table>\n`;
    for (let line of arr) {
        let obj = JSON.parse(line);
        html += `    <tr>\n`;
        html += `        <td>${escapeHtml(obj.name + "")}</td>\n`;
        html += `        <td>${escapeHtml(obj.position + "")}</td>\n`;
        html += `        <td>${escapeHtml(obj.salary + "")}</td>\n`;
        html += `    <tr>\n`;
    }
    html += `</table>`;
    console.log(html);
    function escapeHtml(unsafeStr) {
        return unsafeStr
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}