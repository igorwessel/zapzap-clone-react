import Firebase from '../Firebase/index'
import { Model } from './Model';

export class User extends Model{

    constructor(id){
        super();
        this._data = {};

        if (id) this.getById(id);
    }

    get name(){ return this._data.name; }
    set name(value) { this._data.name = value; }

    get email(){ return this._data.email; }
    set email(value) { this._data.email = value; }

    get photo(){ return this._data.photo; }
    set photo(value) { this._data.photo = value; }

    getById(id){
        return new Promise( (s, f) => {

            this.findByEmail(id).onSnapshot( doc => {

                this.fromJSON(doc.data())
                s(doc)

            })
        })
    }

    save(){
        return this.findByEmail(this.email).set(this.toJSON())
    }

    getRef(){
        return Firebase.db().collection('/users')
    }

    findByEmail(email){

        return User.getRef().doc(email)

    }

}