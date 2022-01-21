import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  email: string;
  id: string;
  name: string;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignupCredentials {
  name: string;
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  accessToken: string;
  /* newProduct: Products[]; */
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignupCredentials) => Promise<void>;
  /* filteredProductFunction: (product: Products[]) => void; */
}
interface Products {
  title: string;
  id: number;
  price: number;
  url_image: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@Hamburgueria:accessToken") || "";
    const user = localStorage.getItem("@Hamburgueria:user") || "";

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("login", { email, password });

    const { accessToken, user } = response.data;

    localStorage.setItem("@Hamburgueria:accessToken", accessToken);
    localStorage.setItem("@Hamburgueria:user", JSON.stringify(user));

    setData({ accessToken, user });
  }, []);

  const signUp = useCallback(
    async ({ name, email, password }: SignupCredentials) => {
      api.post("register", { name, email, password });
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem("@Hamburgueria:accessToken");
    localStorage.removeItem("@Hamburgueria:user");
    localStorage.removeItem("@Hamburgueria:cart");

    setData({} as AuthState);
  }, []);

  /* const [newProduct, setNewProduct] = useState<Products[]>({} as Products[]);

  const filteredProductFunction = (itemFiltered: Products[]) => {
    setNewProduct(itemFiltered);
  }; */

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signIn,
        signOut,
        signUp,
        /* filteredProductFunction,
        newProduct, */
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
