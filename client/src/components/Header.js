import { SettingsIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

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
      <Text>CorpHub</Text>
      <Flex ml="auto">
        <HStack>
          <SettingsIcon mr="2" />
          <Button bg="rgb(15 23 42)" color="red">Logout</Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;