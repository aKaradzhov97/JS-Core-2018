(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return str + this.toString();
        }
        return this.toString();
    }
    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return this.toString() + str;
        }
        return this.toString();
    }
    String.prototype.isEmpty = function () {
        if (this.toString() === "") {
            return true;
        }
        return false;
    }
    String.prototype.truncate = function (n) {
        if (n <= 3) {
            return ".".repeat(n);
        }
        if (this.toString().length <= n) {
            return this.toString();
        }
        let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
        if (lastIndex != -1) {
            return this.toString().substr(0, lastIndex) + "...";
        } else {
            return this.toString().substr(0, n - 3) + "...";
        }
    }
    String.format = function (str, ...params) {
        for (var i = 0; i < params.length; i++) {
            let placeholder = `{${i}}`;
            let index = str.indexOf(placeholder);
            while (index !== -1) {
                str = str.replace(placeholder, params[i]);
                index = str.indexOf(placeholder);
            }
        }
        return str;
    }
})()