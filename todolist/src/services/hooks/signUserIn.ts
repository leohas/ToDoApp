import { authRef } from "../firebase";
import { getAllUsers } from "./getAllUsers";
import { StatusAuth } from "../../pages/LoginPage/LoginPage";

/**
 * Realiza o login do usuário
 * @param userEmail - Email do usuário
 * @param userPassword - Senha do usuário
 */
export const signUserIn = async (userEmail: string, userPassword: string) => {
  let statusAuth: StatusAuth = { verified: false, userType: "" };
  const allUsers = await getAllUsers();
  allUsers.forEach(async (e) => {
    if (e.email === userEmail && e.password === userPassword) {
      statusAuth = { verified: true, userType: e.type };
      await authRef
        .signInWithEmailAndPassword(userEmail, userPassword)
        .then((userInfo) => {
          console.log("User Signed In");
        });
    }
  });
  return statusAuth;
};
