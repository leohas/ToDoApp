import { dbRef } from "../firebase";

/**
 * Pegar todos os usuários do banco
 */
export const getAllUsers = async () => {
  const response = await dbRef
    .collection("users")
    .get()
    .then((res) => {
      return res.docs.map((e) => e.data());
    });
  return response;
};
