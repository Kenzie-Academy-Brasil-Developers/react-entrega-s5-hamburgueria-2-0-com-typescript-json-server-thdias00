import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { isPropertyDeclaration } from "typescript";
import { useAuth } from "../../context/AuthContext";

export const SearchHeader = () => {
  /* const { products, filteredProductFunction } = useAuth(); */
  const [searchProduct, setSearchProduct] = useState("");

  /* const searchResults = () => {
    let filteredProduct = products.filter(
      (product) => product.title === searchProduct
    );
    filteredProductFunction(filteredProduct);
  }; */

  return (
    <InputGroup w="82%">
      <InputRightElement
        color="#FFFFFF"
        bg="sucess"
        mt="2.5"
        mr="2.5"
        borderRadius="5px"
        /* onClick={searchResults} */
      >
        <FaSearch />
      </InputRightElement>
      <Input
        h="60px"
        placeholder="Digitar Pesquisa"
        onChange={(e) => setSearchProduct(e.target.value)}
      />
    </InputGroup>
  );
};
