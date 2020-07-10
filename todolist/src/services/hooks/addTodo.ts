import { dbRef} from '../firebase'
/**
 * Função que adiciona todos nos registros de determinado usuário
 * @param titleToDo título da todo
 * @param descriptionToDo descrição da todo
 * @param userEmail e-mail do usuário
 */
export const addTodo = async (titleToDo: string, descriptionToDo: string, userUid: string) => {
    // array de Idusuários [user1, user2...]
    let userToDos: any[] = []
    let newToDos: any[] = [] 

    const usersDoc = await dbRef.collection('users').get().then(res => {
        const data = res.docs.map((doc: any) => {
            if(userUid === doc.id) {
                 userToDos = doc.data().toDos
            }
        })
        return data
    })

    userToDos.forEach(toDo => {
        newToDos.push(toDo)
    })
    newToDos.push({title: titleToDo, description: descriptionToDo})

    console.log(newToDos)

    usersDoc.forEach(async() => {
        await dbRef.collection('users').doc(userUid)
        .update({toDos: newToDos})
    })

    return newToDos
}