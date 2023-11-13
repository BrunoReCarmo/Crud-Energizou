import { Card, Grid, GridItem, Flex, Box } from "@chakra-ui/react";
import {
  CardHero,
  CardInfo,
  TableList,
  CardStats,
  CardGraphics,
  Sidebar,
  Header,
} from "../components";
import React from "react";

function Home() {
  return (
    <Flex flexDirection="column" className="bg-slate-800">
      <Header />
      <Flex w="100%" my="6" maxW={1240} mx="auto">
        <Sidebar />
        <Box w="100%">
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(6, 1fr)" }}
            templateRows={{ base: "repeat(7)", md: "repeat(3)" }}
            px={{ base: "2" }}
            gap={4}
          >
            <GridItem colSpan={{ base: 2, md: 2 }} rowSpan={1}>
              <CardHero />
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 4 }} rowSpan={1}>
              <CardInfo />
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 5 }} rowSpan={2}>
              <TableList />
            </GridItem>
            <GridItem
              colSpan={{ base: 1, md: 1 }}
              rowSpan={1}
              className="rounded-lg"
            >
              <CardStats />
            </GridItem>
            <GridItem
              colSpan={{ base: 1, md: 1 }}
              rowSpan={1}
              className="bg-slate-950 rounded-lg"
            >
              <CardGraphics />
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Home;
