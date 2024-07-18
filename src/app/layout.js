"use client";
import "@/assets/css/global.css";

import AuthContext from "@/snippets/hooks/authContext";
import { PageWrapper } from "@/snippets/components";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"></meta>
      <AuthContext>
        <body style={{ padding: "10px" }}>
          <PageWrapper>{children}</PageWrapper>
        </body>
      </AuthContext>
    </html>
  );
}
