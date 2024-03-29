import type {
  AllProviderProps,
  Auth,
  AuthProviderData,
} from "types/interfaces/users";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "helpers/Api";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AllProviderProps): JSX.Element => {
  const [logged, setLogged] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<Auth>();
  const navigate = useNavigate();

  const login = ({ token, user }: Auth): void => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setLogged(true);
    navigate("/profiles");
    // navigate(0);
  };

  const logout = (): void => {
    localStorage.clear();
    setLogged(false);
    navigate("/login");
    navigate(0);
  };

  const checkTokenExpiration = (): void => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    Api.get(`/users/${user.id}`, headers)
      .then((res) => {
        const data = res.data;
        setLogged(true);
        if (token) {
          setCurrentUser({
            token,
            user: data,
          });
          localStorage.steItem("user", JSON.stringify(data));
        }
        navigate("/");
      })
      .catch(() => {
        logout();
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) checkTokenExpiration();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ logged, login, logout, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthProviderData => useContext(AuthContext);
