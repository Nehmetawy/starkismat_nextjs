import "@/assets/css/global.css";
import AuthContext from "@/snippets/hooks/authContext";
import { PageWrapper } from "@/snippets/components";

export default function App({ Component, pageProps }) {
  return (
    <AuthContext>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </AuthContext>
  );
}
