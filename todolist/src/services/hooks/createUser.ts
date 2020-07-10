import { authRef, dbRef } from "../firebase";

/**
 *Função que cadastra usuário no Authentication e no Firestore
 * @param userEmail - Email do usuário
 * @param userPassword - Senha do usuário
 */
export const createUser = async (userEmail: string, userPassword: string) => {
  const { user } = await authRef
    .createUserWithEmailAndPassword(userEmail, userPassword)
    .then((user) => {
      return user;
    });
  await dbRef.collection("users").doc(user.uid).set({
    email: userEmail,
    password: userPassword,
    type: "user",
    toDos: [],
  });
};
