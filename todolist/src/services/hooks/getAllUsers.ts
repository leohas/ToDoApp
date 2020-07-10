import {dbRef} from '../firebase'

export const getAllUsers = async() =>{
    const response = await dbRef.collection('users')
   .get()
   .then(res => {
     return res.docs.map(e => e.data())
   })
   return response
}