import { Card, Grid, GridItem } from "@chakra-ui/react";
import { CardHero, CardInfo, TableList, CardStats, CardGraphics } from "../components";
import React from "react";

function Home() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" templateRows="repeat(3)" gap={4}>
      <GridItem colSpan={2} rowSpan={1}>
        <CardHero />
      </GridItem>
      <GridItem colSpan={4} rowSpan={1}>
        <CardInfo/>
      </GridItem>
      <GridItem colSpan={5} rowSpan={2}>
        <TableList />
      </GridItem>
      <GridItem colSpan={1} rowSpan={1} className="rounded-lg">
        <CardStats/>
      </GridItem>
      <GridItem colSpan={1} rowSpan={1} className="bg-slate-950 rounded-lg">
        <CardGraphics/>
      </GridItem>
    </Grid>
  );
}

export default Home;
