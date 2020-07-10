import {authRef} from '../firebase'

export const getCurrentUser = () => {
    const usuario: any = authRef.currentUser?.uid
    return usuario
}