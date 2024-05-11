import { useContext, createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/_auth/firebase";
import { GetUserToken } from "@/_auth/getToken";
import { useAppstate } from "@/snippets/hooks/golbalApp";

export const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const setToken = useAppstate((state) => state.setToken);

  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      GetUserToken(setToken);
    }, 120000);

    const authSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        });
        GetUserToken(setUserToken);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => authSubscribe();
  }, []);

  useEffect(() => {
    setToken(userToken);
  }, [userToken]);

  function set(id, data) {
    if (id === "appLoading") {
      setAppLoading(data);
    }
  }
  return (
    <AuthContext.Provider value={{ user, loading, set, appLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
