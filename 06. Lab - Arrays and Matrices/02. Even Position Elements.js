function evenPositionElement(args) {
    let result = [];
    for (var i = 0; i < args.length; i++) {
        if (i % 2 === 0) {
            result.push(args[i]);
        }
    }
    console.log(result.join(' '));
}