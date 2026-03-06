import { Box, Grid, Image, Text, Button, TextInput } from "@mantine/core";
import { useGlobal } from "../../context/globalStore";
import MessageWidget from "../../home/MessageWidget/Index";
import UsersFeedbacks from "../../home/UsersFeedbacks/Index";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const footerLinks = [
  {
    title: "Support",
    links: [
      {
        title: "Help centre",
        href: "#",
      },
      {
        title: "Account information",
        href: "#",
      },
      {
        title: "About",
        href: "#",
      },
      { title: "Contact us", href: "#" },
    ],
  },
  {
    title: "Help and Solution",
    links: [
      {
        title: "Talk to support",
        href: "#",
      },
      {
        title: "Support docs",
        href: "#",
      },
      {
        title: "System status",
        href: "#",
      },
      { title: "Covid responde", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      {
        title: "Update",
        href: "#",
      },
      {
        title: "Security",
        href: "#",
      },
      {
        title: "Beta test",
        href: "#",
      },
      { title: "Pricing product", href: "#" },
    ],
  },
];

export default function Footer() {
  const { theme } = useGlobal();
  return (
    <>
      <Box
        component="footer"
        style={() => ({
          backgroundColor: theme?.colors.dark[6],
          color: "white",
        })}
      >
        <Box
          display={"flex"}
          py={{ base: 40, lg: 80 }}
          className="flex-col gap-20"
        >
          <Box className="main-wrapper">
            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Box className="max-w-50">
                  {/* <Image src="/assets/images/brand-logo-dark.svg" w="817" h="118" alt="brand logo" className="max-w-sm" /> */}
                  <Image
                    src="/assets/images/brand-logo-dark.svg"
                    width="817"
                    height="118"
                    alt="brand logo"
                    className="max-w-sm"
                  />
                </Box>

                <Box className="mt-10 text-sm">
                  <Text
                    size="lg"
                    fw={500}
                    mb={20}
                    className="ff-heading text-white"
                  >
                    Get started now to get new offers!
                  </Text>
                  <form>
                    <Box
                      w={"100%"}
                      display={"inline-flex"}
                      bd={"2px solid white"}
                      bdrs={"100vmax"}
                      p={5}
                      className="max-w-100 items-center"
                    >
                      <TextInput
                        styles={{
                          input: {
                            fontSize: "inherit",
                            fontFamily: "inherit",
                            color: "inherit",
                            borderRadius: 5,
                            height: 45,
                          },
                        }}
                        w={"100%"}
                        variant="transparent"
                        color="white"
                        placeholder="Enter your email here"
                        // className="text-white placeholder-text-xl! placeholder-red-500!"
                      />
                      <Button color="primary" bdrs={"100vmax"} h={50} w={50}>
                        <FaArrowRight size={50} />
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Grid.Col>

              {/*  */}
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Grid>
                  {footerLinks.map((item, index) => (
                    <Grid.Col key={index} span={{ base: 6, md: 4 }}>
                      <Box component="dl">
                        <Box component="dt" className="leading-12 ff-heading">
                          {item.title}
                        </Box>
                        {item.links.map((link, index) => (
                          <Box
                            component="dd"
                            key={index}
                            className="text-sm  leading-8"
                          >
                            <Link
                              href={link.href}
                              className="text-[#A6A6A6] hover:text-secondary-6"
                            >
                              {link.title}
                            </Link>
                          </Box>
                        ))}
                      </Box>
                    </Grid.Col>
                  ))}
                  {/* <Grid.Col span={{ base: 6, md: 4 }}>B</Grid.Col>
                <Grid.Col span={{ base: 6, md: 4 }}>C</Grid.Col> */}
                </Grid>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
        <Grid
          gutter={{ base: 30 }}
          p={0}
          justify="between"
          fw={"500"}
          fz={"14"}
          className="main-wrapper"
        >
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box className="text-center md:text-left">
              &copy; 2022 Biccas Inc. Copyright and rights reserved
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              display={"flex"}
              component="ul"
              className="md:max-w-70 ml-auto justify-between gap-8 p-0"
            >
              <Box component="li">Terms of Service</Box>
              <Box component="li">Privacy Policy</Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}
