import {dbRef} from '../firebase'

export const getUserToDos = async(userUid: string) => {
    let userToDosArray: any[] = []
    // conseguindo Array de toDos
        await dbRef.collection('users').get().then(res => {
        const data = res.docs.map((doc: any) => {
            if(userUid === doc.id) {
                if(doc.data().type === 'user')
                 userToDosArray = doc.data().toDos
            }
        })
        return data
    })

    return userToDosArray
}   