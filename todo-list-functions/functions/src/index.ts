import * as functions from 'firebase-functions'
import {dbRef} from '../src/services/firebase'

exports.deleteUserData = functions.auth.user().onDelete(async user => {
   await dbRef.collection('users').doc(user.uid).delete()
   return true
})
