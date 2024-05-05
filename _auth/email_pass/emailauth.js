import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export function createNewEmailPassword(email, password, handler) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      handler(false);
    })
    .catch((error) => {
      const errorCode = error.code;
      const modifiedString = errorCode.replace("auth/", "");
      handler(modifiedString);
    });
}
/**

auth/invalid-email
auth/missing-password
auth/email-already-in-use

 */
