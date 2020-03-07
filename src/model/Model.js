export class Model {
    constructor(){
        this._data = {}
    }

    fromJSON(json){
        this._data = Object.assign(this._data, json);
    }

    toJSON(){
        return this._data
    }
}