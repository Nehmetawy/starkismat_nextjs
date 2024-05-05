import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function logoutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("user signed out");
    })
    .catch((error) => {
      console.log("error signing out");
      // An error happened.
    });
}
