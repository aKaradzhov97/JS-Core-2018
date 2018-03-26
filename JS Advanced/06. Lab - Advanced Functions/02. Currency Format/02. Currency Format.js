function result(func) {
    return function (value) {
        return func(',', '$', true, value);
    }
}