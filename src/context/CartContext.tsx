import { useToast } from "@chakra-ui/react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { useAuth } from "./AuthContext";

interface CartProps {
  children: ReactNode;
}
interface Products {
  title: string;
  id: number;
  price: number;
  url_image: string;
}
interface CartData {
  products: Products[];
  cart: Products[];
  total: number;
  loadCart: () => void;
  totalCart: () => void;
  addCart: (product: Products) => void;
  delProduct: (itemId: number) => void;
  removeAll: () => void;
}

const CartContext = createContext<CartData>({} as CartData);

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useAuth must be used within an Cart");
  }

  return context;
};

const CartProvider = ({ children }: CartProps) => {
  const { accessToken, user } = useAuth();
  const [products, setProducts] = useState<Products[]>([] as Products[]);
  const [cart, setCart] = useState<Products[]>([] as Products[]);
  const [total, setTotal] = useState(0);
  const toast = useToast();

  const getProducts = () => {
    api.get("products").then((response) => {
      setProducts([...products, ...response.data]);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const loadCart = () => {
    if (user) {
      api
        .get(`cart?userId=${user.id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => {
          setCart(response.data);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    localStorage.setItem("@Hamburgueria: cart", JSON.stringify(cart));
  }, [cart]);

  const totalCart = () => {
    const totalPrice = cart
      .map((item) => item.price)
      .reduce((a, b) => {
        return a + b;
      }, 0);

    setTotal(totalPrice);
  };

  useEffect(() => {
    totalCart();
  }, [cart]);

  const addCart = (product: Products) => {
    api
      .post("cart", product, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(() => {
        setCart([...cart, product]);
        toast({
          title: "Item adicionado ao carrinho",
          status: "success",
          position: "top",
          isClosable: true,
        });
      })
      .catch(() =>
        toast({
          title: "Só é permitido uma unidade por pedido",
          status: "error",
          position: "top",
          isClosable: true,
        })
      );
  };

  const delProduct = (itemId: number) => {
    api
      .delete(`cart/${itemId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((_) => {
        const newCart = cart.filter((itemOnCart) => itemOnCart.id !== itemId);
        setCart(newCart);
        localStorage.setItem("@Hamburgueria: cart", JSON.stringify(newCart));
        toast({
          title: "Item excluido com sucesso",
          status: "success",
          position: "top",
          isClosable: true,
        });
      });
  };

  const removeAll = () => {
    localStorage.removeItem("@Hamburgueria: cart");
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        total,
        loadCart,
        totalCart,
        addCart,
        delProduct,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
