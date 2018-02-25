function multiplicationTable(n) {
    n = Number(n);
    console.log('<table border="1">');
    let headingRow = "";
    for (var i = 0; i <= n; i++) {
        if (i === 0) {
            headingRow += "<tr>" + "<th>x</th>";
        } else if (i > 0 && i < n) {
            headingRow += "<th>" + i + "</th>";
        } else {
            headingRow += "<th>" + i + "</th>" + "</tr>"
        }
    }
    console.log(headingRow);

    let nextRow = "";
    for (var i = 1; i <= n; i++) {
        for (var j = 0; j <= n; j++) {
            if (j === 0) {
                nextRow += "<tr><th>" + i + "</th>";
            } else if (j > 0 && j < n) {
                nextRow += "<td>" + (j * i) + "</td>";
            } else {
                nextRow += "<td>" + (j * i) + "</td>" + "</tr>";
            }
        }
        console.log(nextRow);
        nextRow = "";
    }
    console.log("</table>")
}