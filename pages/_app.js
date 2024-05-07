import "../css/global.css";
import { AuthContextProvider } from "../_app/context/authContext";

// function SafeHydrate({ children }) {
//   return (
//     <div suppressHydrationWarning>
//       {typeof window === "undefined" ? null : children}
//     </div>
//   );
// }

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
