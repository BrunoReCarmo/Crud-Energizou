import {
  Avatar,
  Flex,
  HStack,
  Text,
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
      boxShadow="0 1px 0 #FFF"
      color="gray.300"
      fontWeight="bold"
    >
      <Text>CorpHub</Text>
      <Flex ml="auto">
        <HStack>
          <Text>Bruno Carmo</Text>
          <Avatar size="md" name="Bruno Carmo" />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;