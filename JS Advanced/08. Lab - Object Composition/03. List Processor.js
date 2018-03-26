function solve(arr) {
    let processor = (function () {
        let list = [];
        function add(string) {
            list.push(string);
        }
        function remove(string) {
            list = list.filter(e => e !== string);
        }
        function print() {
            console.log(list.toString());
        }
        return {
            add,
            remove,
            print
        }

    })();
    for (let command of arr) {
        let tokens = command.split(' ');
        let cmd = tokens[0];
        processor[cmd](tokens[1]);
    }
}