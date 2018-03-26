class Repository {
    constructor(props) {
        this.props = props;
        this.data = new Map();
        this._id = 0;
    }

    get count() {
        return this.data.size;
    }

    add(entity) {
        this._validate(entity);
        this.data.set(this._id, entity);
        return this._id++;
    }
    get(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        return this.data.get(id);
    }
    update(id, newEntity) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        this._validate(newEntity);
        this.data.set(id, newEntity);
    }
    del(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        this.data.delete(id);
    }
    _validate(entity) {
        for (let key in this.props) {
            if (!entity.hasOwnProperty(key)) {
                throw new Error(`Property ${key} is missing from the entity!`);
            }
            if (this.props[key] !== typeof entity[key]) {
                throw new TypeError(`Property ${entity[key]} is of incorrect type!`);
            }
        }
    }
}