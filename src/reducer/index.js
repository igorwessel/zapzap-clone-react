import { loginGoogle } from "../services/firebase"

const initialState = {
    name: null,
    photo: null,
    email: null,
    contacts: []
}

export const LOGIN = 'LOGIN'


export const Reducer = async (state = initialState, action) => {
    const user = await loginGoogle()

    switch(action.type){
        case LOGIN:
            return {
                ...state,
                name: action.name,
                photo: action.photo,
                email: action.email,
                contacts: action.contacts
            }
        default:
            return state
    }
}