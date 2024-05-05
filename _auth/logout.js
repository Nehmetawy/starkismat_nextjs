import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function logoutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
