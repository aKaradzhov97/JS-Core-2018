class Dialog {
    constructor(message, callback) {
        this.message = message;
        this.callback = callback;
        this.inputs = [];
        this.element = null;
    }
    addInput(label, name, type) {
        this.inputs.push({label, name, type});
    }
    render() {
        //Creating elements >>>
        this.element = $('<div class="overlay">');
        let innerDiv = $('<div class="dialog">');
        innerDiv.append(`<p>${this.message}</p>`);
        //Append all of the objects from the inputs array
        for (let obj of this.inputs) {
            innerDiv.append(`<label>${obj.label}</label>`);
            innerDiv.append(`<input name="${obj.name}" type="${obj.type}">`);
        }
        innerDiv.append($('<button>OK</button>').on('click', this._ok.bind(this)));
        innerDiv.append($('<button>Cancel</button>').on('click', this._cancel.bind(this)));
        this.element.append(innerDiv);
        $('body').append(this.element);
    }
    _cancel() {
        $(this.element).remove();
    }
    _ok() {
        let obj = {};
        let inputArr = $(this.element).find('input').toArray();
        inputArr.forEach(i => obj[$(i).attr('name')] = $(i).val());
        this.callback(obj);
        this._cancel();
    }
}