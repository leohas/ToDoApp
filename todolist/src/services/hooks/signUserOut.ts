import { authRef } from '../firebase'

export const signUserOut = async () => {
    await authRef.signOut().then(() => {
        console.log('User Signed Out')
    })
}   