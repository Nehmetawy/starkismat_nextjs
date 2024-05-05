import { useContext, createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../_auth/firebase";

export const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const authSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => authSubscribe();
  }, []);

  function set(id, data) {
    if (id === "appLoading") {
      setAppLoading(data);
    }
  }
  return (
    <AuthContext.Provider value={{ user, loading, set, appLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
