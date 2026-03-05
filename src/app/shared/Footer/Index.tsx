import { Box, Flex, Grid, Text, Space } from "@mantine/core";
import { useGlobal } from "../../context/globalStore";
import UsersComments from "./UsersComments/Index";
import { FaEnvelope } from "react-icons/fa6";
import MessageWidget from "./MessageWidget/Index";

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
        <Grid gutter={{ base: 30, md: 30, lg: 50 }} className="main-wrapper">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <UsersComments />
            <Space h={40} />
            <Box component="ul" display={"flex"} className="gap-3">
              <Box component="li">
                <Text fz={20} fw={700}>
                  AppStore
                </Text>
              </Box>
              <Box component="li">
                <Text fz={20} fw={700}>
                  GooglePay
                </Text>
              </Box>
            </Box>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MessageWidget />
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}
