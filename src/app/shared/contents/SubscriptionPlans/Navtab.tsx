import React from "react";
import { SubscriptionType, SubscriptionTypes } from "./Index";
import { Box, Button, MantineTheme, Text } from "@mantine/core";
import { useGlobal } from "../../../context/globalStore";

export default function Navtab({
  selectedSubType,
  setSelectedSubType,
}: {
  selectedSubType: SubscriptionType;
  setSelectedSubType: React.Dispatch<React.SetStateAction<SubscriptionType>>;
}) {
  const {colorScheme} = useGlobal();
  return (
    <>
      <Box component="div" className="grid place-items-center">
        <Text
          component="ul"
          style={() => {
            return {
              backgroundColor:
                colorScheme === "dark" ? `rgba(255, 255, 255, 0.1)` : `white`,
            };
          }}
          p={5}
          className="flex items-center justify-center gap-2 shadow-sm rounded-[100vmax]"
        >
          <Text component="li">
            {/* <button type="button" className="">Bill Monthly</button> */}
            {/* <Button color="primary" size="md" fw={100}> */}
            <Button
              onClick={() => setSelectedSubType("MONTHLY")}
              size="md"
              fw={500}
              style={(theme: MantineTheme) => ({
                backgroundColor:
                  colorScheme === "dark"
                    ? selectedSubType === SubscriptionTypes.MONTHLY
                      ? "gray"
                      : "transparent"
                    : selectedSubType === SubscriptionTypes.MONTHLY
                      ? theme.colors.primary[6]
                      : "transparent",
                color:
                  colorScheme === "dark"
                    ? "white"
                    : selectedSubType === SubscriptionTypes.MONTHLY
                      ? "white"
                      : theme.colors.gray[6],
                fontWeight: 500,
                fontSize: "inherit",
              })}
            >
              Bill Monthly
            </Button>
          </Text>
          <Text component="li">
            <Button
              onClick={() => setSelectedSubType("YEARLY")}
              size="md"
              fw={500}
              style={(theme: MantineTheme) => ({
                backgroundColor:
                  colorScheme === "dark"
                    ? selectedSubType === SubscriptionTypes.YEARLY
                      ? "gray"
                      : "transparent"
                    : selectedSubType === SubscriptionTypes.YEARLY
                      ? theme.colors.primary[6]
                      : "transparent",
                color:
                  colorScheme === "dark"
                    ? "white"
                    : selectedSubType === SubscriptionTypes.YEARLY
                      ? "white"
                      : theme.colors.gray[6],
                fontWeight: 500,
                fontSize: "inherit",
              })}
            >
              Bill Yearly
            </Button>
          </Text>
        </Text>
      </Box>
    </>
  );
}
