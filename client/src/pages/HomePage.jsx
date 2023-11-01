import { Grid, GridItem } from "@chakra-ui/react";
import { CardHero, CardInfo, TableList } from "../components";
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
      <GridItem colSpan={1} rowSpan={1} className="bg-slate-950 rounded-lg"/>
      <GridItem colSpan={1} rowSpan={1} className="bg-slate-950 rounded-lg"/>
    </Grid>
  );
}

export default Home;
