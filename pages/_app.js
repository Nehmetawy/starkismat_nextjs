import "../css/global.css";
import { AuthContextProvider } from "../_app/context/authContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
