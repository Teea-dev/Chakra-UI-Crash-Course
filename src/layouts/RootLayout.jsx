import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import "../index.scss";

export default function RootLayout() {
  return (
    <>
      <Nav />

      <Grid templateColumns="repeat(6,1fr)" bg="gray.50">
        <GridItem
          as="aside"
          colSpan={{
            base: 6,
            lg: 2,
            xl: 1,
          }}
          className="sidebar"
          minHeight={{ lg: "100vh " }}
          // p={{ base: "20px "}}
        >
          <Sidebar />
        </GridItem>
        <GridItem
          as="main"
          className="main"
          colSpan={{ base: 6, lg: 4, xl: 5 }}
        >
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
}
