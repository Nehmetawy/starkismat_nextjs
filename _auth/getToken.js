import { auth } from "./firebase";
export function GetUserToken(setToken) {
  auth.currentUser
    .getIdToken(true)
    .then(function (idToken) {
      setToken(idToken);
    })
    .catch(function (error) {});
}
