import { Box, Center, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BsFillCartFill } from "react-icons/bs";
import { SearchHeader } from "./SearchHeader";
import Logo from "../../assets/Captura de tela de 2022-01-18 20-51-59.png";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { useAuth } from "../../context/AuthContext";
import { ModalComponent } from "../Modal/Modal";

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });
  const [search, setSearch] = useState(false);
  const { signOut } = useAuth();

  return (
    <Flex
      borderBottom="1px"
      borderBottomColor="#f5f5f5"
      paddingX="8"
      paddingY="2"
      alignItems="center"
    >
      {isWideVersion && (
        <>
          <Image w="158.94px" h="36.83px" src={Logo} />
          <Center
            ml="auto"
            as="button"
            fontSize="2rem"
            justifyContent="space-between"
          >
            {/* <SearchHeader /> */}
            <Box mr="3">
              <ModalComponent />
            </Box>
            <Box onClick={signOut}>
              <FiLogOut color="#BDBDBD" size="23" />
            </Box>
          </Center>
        </>
      )}
      {/* {!isWideVersion && search && (
        <Flex alignItems="center" w="100%">
          <SearchHeader />
          <Flex
            onClick={() => setSearch(false)}
            justifyContent="center"
            alignItems="center"
            bg="negative"
            borderRadius="5px"
            w="50px"
            h="50px"
            ml="3"
          >
            <CloseIcon color="white" size="40" />
          </Flex>
        </Flex>
      )} */}
      {!isWideVersion && !search && (
        <>
          <Image w="158.94px" h="36.83px" src={Logo} />
          <Center
            ml="auto"
            as="button"
            fontSize="2rem"
            justifyContent="space-between"
          >
            {/* <Box mr="3" onClick={() => setSearch(true)}>
              <FaSearch color="#BDBDBD" size="23" />
            </Box> */}
            <Box mr="3">
              <ModalComponent />
            </Box>
            <Box onClick={signOut}>
              <FiLogOut color="#BDBDBD" size="23" />
            </Box>
          </Center>
        </>
      )}
    </Flex>
  );
};
