function solution(id) {
    let arr = [];
    let text = document.getElementById(id).textContent;
    let rgx = /\((.+?)\)/g;

    let match = rgx.exec(text);
    while (match) {
        arr.push(match[1]);
        match = rgx.exec(text);
    }
    return arr.join('; ');
}