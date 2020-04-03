import { useContext } from 'react'
import userContext from './userContext'
import { firebase } from '../services/firebase'

const provider = new firebase.auth.GoogleAuthProvider();

export const useSession = () => {
    const { user } = useContext(userContext)
    return user
}

export const loginGoogle = async () => {
    try{
        const result = await firebase.auth().signInWithPopup(provider)

    } catch(err) {
        console.log(err)
        throw err
    }
}   

export const signOut = () => firebase.auth().signOut();