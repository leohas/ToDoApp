import { authRef } from "../firebase";
/**
 * Pega o usuário que está logado atualmente
 */
export const getCurrentUser = () => {
  const usuario: any = authRef.currentUser?.uid;
  return usuario;
};
