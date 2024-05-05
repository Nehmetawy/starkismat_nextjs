import { signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase";
export { auth };

export function senOtpToPhone(phoneNumber, appVerifier, handle) {
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      if (handle) {
        handle({
          smsSent: true,
          error: false,
          result: confirmationResult,
        });
      }
    })
    .catch((error) => {
      // Error; SMS not sent
      window.confirmationResult = undefined;
      if (handle) {
        handle({
          smsSent: false,
          error: true,
          log: error.message || "error while processing",
        });
      }
    });
}

export function confirmOtp(otp, confirmationResult, handle) {
  if (confirmationResult) {
    confirmationResult
      .confirm(otp)
      .then((result) => {
        const user = result.user;
        handle({
          singIn: true,
          error: false,
        });
      })
      .catch((error) => {
        handle({
          singIn: false,
          error: true,
          log: error.message || "error while processing",
        });
      });
  } else {
    handle({
      singIn: false,
      error: true,
    });
  }
}
