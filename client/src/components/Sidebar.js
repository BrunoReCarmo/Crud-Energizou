import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useSidebarContext } from "../context";
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
  const { isOpen, onClose } = useSidebarContext();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={() => onClose()} size="xs" w="fit-content">
        <DrawerOverlay>
            <DrawerContent onClick={() => onClose()} bg="rgb(15 23 42);">
              <DrawerCloseButton />
                <SidebarNav/>
            </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="1.5">
      <SidebarNav />
    </Box>
  );
};

export default Sidebar;
