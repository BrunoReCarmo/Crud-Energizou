import { SettingsIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Text,
  useBreakpointValue,
  Icon,
  IconButton,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { useSidebarContext } from "../context";

const Header = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { onOpen } = useSidebarContext();

  const handleLogout = () => {
    //Se apertar Logout => Apaga Token no Local Storage
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1200}
      h="20"
      mx="auto"
      px="2"
      py="2"
      align="center"
      boxShadow="0 1px 0 #757575"
      color="gray.300"
      fontWeight="bold"
    >
          {isMobile && (
        <IconButton
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          fontSize="20"
          mr="2"
        ></IconButton>
      )}
      <Text>CorpHub</Text>
      <Flex ml="auto">
        <HStack>
          <SettingsIcon mr="2" />
          <Button bg="rgb(15 23 42)" color="red" onClick={handleLogout}>
            Logout
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;