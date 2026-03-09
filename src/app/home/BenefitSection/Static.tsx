"use client";
import { Box, Grid, Text, Card } from "@mantine/core";
import { Image } from "@mantine/core";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbRibbonHealth, TbTruckDelivery } from "react-icons/tb";
import { GiSolarPower } from "react-icons/gi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { useGlobal } from "../../context/global-store";

const list = [
  "Faster access to essential services",
  "Local businesses supporting local communities",
  "Seamless ordering and booking process",
  "Customer support that understands Lagos",
];
export default function Static() {
  const { theme, colorScheme } = useGlobal();
  return (
    <>
      <Box component="section">
        <Box className="main-wrapper">
          <Grid>
            <Grid.Col span={{ sx: 12, md: 6 }}>
              <h2 className="ff-heading max-w-100 text-2xl md:text-3xl xl:text-5xl font-bold mb-16 | after:content-[''] after:block after:w-75 after:mx-auto after:h-16 after:bg-[url('/assets/images/title-underline-waves.svg')] after:bg-no-repeat after:bg-center">
                What Benefit Will You Get
              </h2>

              <Box component="ul" my={20}>
                {list.map((feature, index) => (
                  <Box
                    component="li"
                    key={index}
                    mb={18}
                    fw={600}
                    className="text-lg flex gap-2 before:block before:content-[url('/assets/icons/icon-circle-check-mark.svg')]"
                  >
                    {feature}
                  </Box>
                ))}
              </Box>
              <Text fw={700} size={"xl"}>
                Lagos moves fast. We help you move smarter.
              </Text>
            </Grid.Col>
            <Grid.Col span={{ sx: 12, md: 6 }}>
              <div className="relative w-full h-full max-w-md mx-auto">
                <Box
                  pos={"absolute"}
                  // className="z-10 bottom-4 lg:bottom-[5%] left-2 right-2 lg:left-[unset] lg:-right-20 | flex flex-col items-start gap-4"
                  className="z-10 top-4 left-2 right-2 lg:-left-20 lg:right-[unset] p-4 | flex flex-col items-start gap-4"
                >
                  <Card
                    shadow="sm"
                    bdrs={{ lg: 30 }}
                    style={{
                      color:
                        colorScheme === "dark"
                          ? theme?.colors.dark[0]
                          : theme?.colors.primary[6],
                    }}
                  >
                    <Text
                      fz={15}
                      fw={600}
                      display={"flex"}
                      style={{
                        color: theme?.colors.dark[6],
                      }}
                      className="items-end gap-2"
                    >
                      <MdOutlineLocalGroceryStore
                        size={30}
                        style={{
                          color: theme?.colors.pink[6],
                        }}
                      />
                      Groceries shopping
                    </Text>
                  </Card>
                  <Card
                    shadow="sm"
                    bdrs={{ lg: 30 }}
                    style={{
                      color:
                        colorScheme === "dark"
                          ? theme?.colors.dark[0]
                          : theme?.colors.primary[6],
                    }}
                  >
                    <Text
                      fz={15}
                      fw={600}
                      display={"flex"}
                      style={{
                        color: theme?.colors.dark[6],
                      }}
                      className="items-end gap-2"
                    >
                      <IoFastFoodOutline
                        size={30}
                        style={{
                          color: theme?.colors.primary[6],
                        }}
                      />
                      Food & drinks
                    </Text>
                  </Card>
                </Box>
                {/* <Card
                    pos={"absolute"}
                    shadow="sm"
                    bdrs={{ lg: 30 }}
                    className="z-10 top-4 left-2 right-2 lg:-left-20 lg:right-[unset] p-4"
                    style={{
                      color:
                        colorScheme === "dark"
                          ? theme?.colors.dark[0]
                          : theme?.colors.primary[6],
                    }}
                  >
                    <Text
                      fz={15}
                      fw={600}
                      display={"flex"}
                      style={{
                        color: theme?.colors.dark[6],
                      }}
                      className="items-end gap-2"
                    >
                      <IoFastFoodOutline
                        size={30}
                        style={{
                          color: theme?.colors.primary[6],
                        }}
                      />
                      Food & drinks
                    </Text>
                  </Card> */}
                {/*  */}
                <Box
                  pos={"absolute"}
                  className="z-10 bottom-4 lg:bottom-[5%] left-2 right-2 lg:left-[unset] lg:-right-20 | flex flex-col items-start gap-4"
                >
                  <Card
                    shadow="sm"
                    bdrs={{ lg: 30 }}
                    style={{
                      color:
                        colorScheme == "dark"
                          ? theme?.colors.dark[0]
                          : theme?.colors.danger[6],
                    }}
                  >
                    <Text
                      fz={15}
                      fw={600}
                      display={"flex"}
                      style={{
                        color: theme?.colors.dark[6],
                      }}
                      className="items-end gap-2"
                    >
                      Delivery & Van hire
                      <TbTruckDelivery
                        size={30}
                        style={{
                          color: theme?.colors.danger[6],
                        }}
                      />
                    </Text>
                  </Card>
                  <Card
                    shadow="sm"
                    bdrs={{ lg: 30 }}
                    style={{
                      color:
                        colorScheme == "dark"
                          ? theme?.colors.dark[0]
                          : theme?.colors.secondary[6],
                    }}
                  >
                    <Text
                      fz={15}
                      fw={600}
                      display={"flex"}
                      style={{
                        color: theme?.colors.dark[6],
                      }}
                      className="items-end gap-2"
                    >
                      {/* <TbRibbonHealth
                          size={30}
                          style={{
                            color: theme?.colors.accentBlue[6],
                          }}
                        /> */}
                      <GiSolarPower
                        size={80}
                        color={theme?.colors.secondary[6]}
                      />
                      Solar accessories & services
                    </Text>
                  </Card>
                  <Card
                    shadow="sm"
                    bdrs={{ lg: 30 }}
                    style={{
                      color:
                        colorScheme == "dark"
                          ? theme?.colors.dark[0]
                          : theme?.colors.accentBlue[6],
                    }}
                  >
                    <Text
                      fz={15}
                      fw={600}
                      display={"flex"}
                      style={{
                        color: theme?.colors.dark[6],
                      }}
                      className="items-end gap-2"
                    >
                      <TbRibbonHealth
                        size={30}
                        style={{
                          color: theme?.colors.accentBlue[6],
                        }}
                      />
                      Telemedicine
                    </Text>
                  </Card>
                </Box>
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src={"/assets/images/black-and-white-laptop.png"}
                    width={1800}
                    height={2116}
                    alt="black and white laptop"
                  />
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
