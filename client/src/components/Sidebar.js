import React from "react";
import { Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import { Box, Icon } from "@chakra-ui/react";
import { SideLinks } from "../constantes";

const Sidebar = () => {
  return (
    <Stack spacing="6" className="bg-slate-900 antialised" rounded="lg">
      <Stack>
        {SideLinks.map((nav) => (
          <Stack key={nav.id}>
            <ChakraLink
              _hover={{ bg: "gray.800" }}
              p="4"
              my="3"
              mx="5"
              borderRadius={5}
              display="flex"
            >
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="gray.300"
                display="flex"
                alignContent="center"
              >
                <Box
                  bg="teal.100"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p="1"
                  rounded="lg"
                  mr="2"
                >
                  <Icon as={nav.icon} boxSize={4} color="teal.500" />
                </Box>
                {nav.title}
              </Text>
            </ChakraLink>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Sidebar;
