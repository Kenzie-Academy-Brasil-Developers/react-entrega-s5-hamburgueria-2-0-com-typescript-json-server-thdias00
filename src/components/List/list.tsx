import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useCart } from "../../context/CartContext";

interface Products {
  title: string;
  id: number;
  price: number;
  url_image: string;
}

export const List = () => {
  const { totalCart, addCart, products } = useCart();

  const addToCart = (product: Products) => {
    addCart(product);
    totalCart();
  };

  /*const removeAll = () => {
    setCurrentSale([]);
    setCartTotal(0);
  };

  const removeItem = (item) => {
    const newCurentSale = currentSale.filter((i) => i !== item);
    setCurrentSale(newCurentSale);
    setCartTotal(cartTotal - item.price);
  }; */

  return (
    <>
      <Flex w="100%" justifyContent="center">
        <Flex
          overflowX={["scroll", "scroll", "inherit", "inherit"]}
          whiteSpace={["nowrap", "nowrap", "normal", "normal"]}
          flexWrap={["nowrap", "nowrap", "wrap", "wrap"]}
          justifyContent={["start", "start", "center", "center"]}
        >
          {products.map((product, index) => (
            <Flex
              flexDirection="column"
              key={index}
              w="300px"
              border="2px solid"
              borderColor="gray.100"
              _hover={{ borderColor: "sucess" }}
              borderRadius="5px"
              m="4"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                bg="gray.0"
                p="30px 15px"
                flexWrap="nowrap"
              >
                <Image
                  src={product.url_image}
                  alt={product.title}
                  w="150px"
                  h="150px"
                />
              </Flex>
              <Box w="300px" p="30px 15px" spacing={4}>
                <Heading mb="4" fontSize="xl">
                  {product.title}
                </Heading>
                <Text mb="4" fontWeight="bold" color="sucess">
                  R$: {product.price.toFixed(2)}
                </Text>
                <Button
                  w="50%"
                  bg="gray.100"
                  _hover={{ bg: "sucess", color: "#FFFFFF" }}
                  color="gray.300"
                  onClick={() => addToCart(product)}
                >
                  Adicionar
                </Button>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
};
