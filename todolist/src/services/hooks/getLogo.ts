import { storeRef } from "../firebase";
/**
 * Acessa a logo do Storage
 */
export const getLogo = async () => {
  const logoRef = await storeRef
    .ref("todo-logo.webp")
    .getDownloadURL()
    .then((url) => url);
  return logoRef;
};
