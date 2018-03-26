function getExtensibleObject() {
    let obj = {
        extend: function (template) {
            for (var key in template) {
                if (template.hasOwnProperty(key)) {
                    var element = template[key];
                    console.log(typeof element);
                    if (typeof element === 'function') {
                        obj.__proto__[key] = element;
                    } else {
                        obj[key] = element;
                    }
                }
            }
        }
    }
    return obj;
}