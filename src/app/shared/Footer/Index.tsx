import { Box, Grid, MantineTheme, Text } from "@mantine/core";
import React from "react";
import { useGlobal } from "../../context/globalStore";

export default function Footer() {
  const { theme, colorScheme } = useGlobal();
  return (
    <>
      <Box
        component="section"
        py={{ base: 40, lg: 80 }}
        style={() => ({
          backgroundColor: theme?.colors.dark[6],
          color: "white",
        })}
      >
        <Grid className="main-wrapper">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text
              fw={400}
              fz={{ base: 35, md: 45 }}
              ta="left"
              mb={{ base: 20, md: 30 }}
              ff={"heading"}
              style={() => ({
                maxWidth: "450px",
                lineHeight: 1.2,
              })}
            >
              People are Saying About LagosApps
            </Text>
            <Text>Everything you need to accept to payment and grow your money of manage anywhere on planet</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>B</Grid.Col>
        </Grid>
      </Box>
    </>
  );
}
