"use client";
import { Box, Button, Grid, Text, Title, Card } from "@mantine/core";
import { Image } from "@mantine/core";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbRibbonHealth, TbTruckDelivery } from "react-icons/tb";
import { GiSolarPower } from "react-icons/gi";
import { useGlobal } from "../../context/globalStore";
import PrimaryBtn from "../../shared/components/buttons/PrimaryBtn";
import { FaRegCreditCard } from "react-icons/fa6";

export default function Static() {
  const { theme, colorScheme } = useGlobal();
  return (
    <>
      <section className="hero">
        <div className="flex flex-col main-wrapper">
          <div className="lg:h-screen lg:max-h-200 | grid grid-cols-12 gap-y-8 md:gap-x-4 items-center mt-10">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1">
              {/* <h1 className="ff-heading text-5xl md:text-8xl font-bold md:mt-30">
                      Convenience and Value
                    </h1> */}
              {/* className="ff-heading text-5xl md:text-8xl font-bold md:mt-30" */}
              {/* <Box component="h1" fz={'6rem'} fw={'600'} lh={1.1}>
                      Convenience and Value
                    </Box> */}
              <Title
                order={1}
                fz={{ base: "3rem", xs: "6rem" }}
                lh={1.1}
                className="font-bold md:mt-30"
              >
                Convenience and Value
              </Title>

              {/*  */}
              {/* <span className="block mt-8">
                    <svg
                      width="539"
                      height="39"
                      viewBox="0 0 539 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.00105 35C81.1908 11.6067 295.456 -21.144 535.001 35"
                        stroke="#0FA958"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span> */}

              <div className="mt-6 mb-8 max-w-full">
                <Image
                  src="/assets/images/green-curved-line.svg"
                  width={539}
                  height={39}
                  alt="Vector 35"
                />
              </div>

              {/*  */}

              <p className="text-lg md:text-xl max-w-[500px] md:leading-8.5">
                From island to mainland, order food, move around, shop, and get
                things done, all from one app built for the real Lagos
                experience.
              </p>

              <div className="my-6 md:my-10"></div>

              <PrimaryBtn
                title="Download the App"
                handleEvent={() => alert("Download the App")}
                size="xl"
              />
            </div>
            <div className="col-span-12 md:col-span-6 xbg-red-400 order-1 md:order-2">
              <div className="relative w-full h-full max-w-95 mx-auto">
                <Card
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
                    className="items-end gap-2"
                  >
                    <IoFastFoodOutline
                      size={30}
                      style={{
                        color: theme?.colors.primary[6],
                      }}
                    />
                    From Our Kitchen to Your Doorstep
                  </Text>
                </Card>
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
                      className="items-end gap-2"
                    >
                      Ride Smart . Move Easy
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
                          : theme?.colors.accentBlue[6],
                    }}
                  >
                    <Text
                      fz={15}
                      fw={600}
                      display={"flex"}
                      className="items-end gap-2"
                    >
                      <TbRibbonHealth
                        size={30}
                        style={{
                          color: theme?.colors.accentBlue[6],
                        }}
                      />
                      Accessible Healthcare for Every Lagos Family
                    </Text>
                  </Card>
                </Box>

                {/* Floatin Icons */}
                <GiSolarPower
                  size={80}
                  className="hidden lg:block absolute z-20 lg:-right-20 lg:top-40 text-secondary-8"
                />
                <FaRegCreditCard
                  size={60}
                  className="hidden lg:block absolute z-20 lg:-left-20 lg:top-40 text-pink-600 rotate-12"
                />

                <div className="z-0 relative bg-gray-100 overflow-hidden rounded-xl mt-16 md:mt-0">
                  <Image
                    src="/assets/images/joyful-black-male-female-best-friends-have-fun-together-take-picture-themselves-pose-making-selfie-being-good-mood-after-successful-day.png"
                    width={1640}
                    height={2068}
                    alt="Vector 35"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
