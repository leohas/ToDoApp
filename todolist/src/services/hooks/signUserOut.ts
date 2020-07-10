import { authRef } from "../firebase";
/**
 * Realiza o logout do usuário
 */
export const signUserOut = async () => {
  await authRef.signOut().then(() => {
    console.log("User Signed Out");
  });
};
