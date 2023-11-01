import { Grid, GridItem } from "@chakra-ui/react";
import { CardHero, CardInfo } from "../components";
import React from "react";

function Home() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={4}>
      <GridItem colSpan={2}>
        <CardHero />
      </GridItem>
      <GridItem colSpan={4}>
        <CardInfo />
      </GridItem>
    </Grid>
  );
}

export default Home;
