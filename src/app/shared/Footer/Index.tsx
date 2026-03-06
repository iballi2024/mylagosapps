import { Box, Grid, Image, Text } from "@mantine/core";
import { useGlobal } from "../../context/globalStore";
import MessageWidget from "../../home/MessageWidget/Index";
import UsersFeedbacks from "../../home/UsersFeedbacks/Index";

export default function Footer() {
  const { theme } = useGlobal();
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
        <Box className="main-wrapper">
          <Grid>
            <Grid.Col span={12}>
              <Box className="max-w-50">
                {/* <Image src="/assets/images/brand-logo-dark.svg" w="817" h="118" alt="brand logo" className="max-w-sm" /> */}
                <Image src="/assets/images/brand-logo-dark.svg" width="817" height="118" alt="brand logo" className="max-w-sm" />
              </Box>

              <Box className="mt-10 text-sm">
                <Text size="lg" fw={600} className="ff-heading text-white">
                  Get started now to get new offers!
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
        {/* <Grid gutter={{ base: 30, md: 30, lg: 50 }} className="main-wrapper">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <UsersFeedbacks />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MessageWidget />
          </Grid.Col>
        </Grid> */}
      </Box>
    </>
  );
}
