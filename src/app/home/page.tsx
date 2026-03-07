"use client";
import { Box, Button, Grid, Text, Title, Card } from "@mantine/core";
import Toolbar from "../shared/components/Toolbar/Index";
import { Image } from "@mantine/core";
import PrimaryBtn from "../shared/components/buttons/PrimaryBtn";
import AppsLogosCarousel from "./AppsLogosCarousel";
import AppCarousel from "./AppCarousel";
import { FaArrowRightLong, FaRegCreditCard } from "react-icons/fa6";
import { Product, products } from "./app-content-list";
import ProductsSlider from "./ProductsSlider";
import SubscriptionPlans from "./SubscriptionPlans/Index";
import Footer from "../shared/Footer/Index";
import { useGlobal } from "../context/globalStore";
import UsersFeedbacks from "./UsersFeedbacks/Index";
import MessageWidget from "./MessageWidget/Index";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbRibbonHealth, TbTruckDelivery } from "react-icons/tb";
import { GiSolarPower } from "react-icons/gi";
import { BsCreditCardFill } from "react-icons/bs";
import HeroSection from "./HeroSection/Index";
import LagosAppsEcosystemSection from "./LagosAppsEcosystemSection/Index";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import BenefitSection from "./BenefitSection/Index";


export default function Home() {
  const { theme, colorScheme } = useGlobal();

  const gradient =
    colorScheme === "dark"
      ? `linear-gradient(
        to bottom right,
        ${theme?.colors.teal[9]}20,
        ${theme?.colors.dark[8]},
        ${theme?.colors.teal[9]}20
      )`
      : `linear-gradient(
        to bottom right,
        ${theme?.colors.teal[0]},
        ${theme?.white},
        ${theme?.colors.teal[0]}
      )`;

  return (
    <>
      <Toolbar />

      {/* <MantineProvider theme={theme}> */}
      {/* <Box
        style={{
          background: `
      linear-gradient(
        to bottom right,
        var(--mantine-color-teal-0),
        var(--mantine-color-body),
        var(--mantine-color-teal-0)
      )
    `,
        }}
      > */}

      <Box pb={{ base: "100px", xl: "100px" }} style={{ background: gradient }}>
        <HeroSection />

        <div className="my-20"></div>
        <section>
          <Title
            order={2}
            className="ff-heading text-2xl md:text-3xl xl:text-5xl font-bold text-center mb-6 | after:content-[''] after:block after:w-75 after:mx-auto after:h-16 after:bg-[url('/assets/images/title-underline-waves.svg')] after:bg-no-repeat after:bg-center"
          >
            Apps That Power Daily Life in Lagos
          </Title>

          {/* <AppsLogosCarousel />

          <hr /> */}
          <AppCarousel />
        </section>

        <Box
          style={{
            background: colorScheme === "dark" ? `` : `#F9F8FE`,
          }}
        >
          <LagosAppsEcosystemSection />
        </Box>

        {/* </div> */}

        <div className="my-20"></div>

        <Box component="section">
          <div className="main-wrapper">
            <h2 className="ff-heading text-2xl md:text-3xl xl:text-5xl font-bold text-center mb-16 | after:content-[''] after:block after:w-75 after:mx-auto after:h-16 after:bg-[url('/assets/images/title-underline-waves.svg')] after:bg-no-repeat after:bg-center">
              What You Can Do on LagosApp
            </h2>

            {/* <ProductsSlider colorScheme={colorScheme ?? "light"} /> */}
            <ProductsSlider />
          </div>
        </Box>

        <div className="py-20"></div>
        <SubscriptionPlans colorScheme={colorScheme ?? "light"} />
        <div className="py-20"></div>

        <BenefitSection />


        <div className="hidden grid grid-cols-12">
          {products.map((prod: Product, index: number) => {
            return (
              <div
                key={index}
                // className="col-span-full md:col-span-3  p-5 lg:p-12 flex flex-col justify-between"
                className="col-span-full md:col-span-3  p-5 lg:p-12 flex flex-col justify-between"
                style={{
                  backgroundColor: `#${prod.color?.pri}`,
                  color: prod?.color?.sec ? `#${prod?.color?.sec}` : "white",
                }}
              >
                <div>
                  <h3 className="ff-heading text-2xl md:text-3xl font-bold mb-4">
                    {prod?.groupTitle}
                  </h3>
                  <ul className="list-disc marker:content-['.'] marker:block marker:text-7xl marker:leading-0 marker-top-3 ml-4 mb-6 md:text-xl">
                    {prod.operations?.map((op, index: number) => (
                      <li key={index} className="mb-3">
                        {op}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={prod.cta.url}
                  target="_blank"
                  aria-label="Visit app"
                  className="flex ml-auto text-right gap-4 mt-6"
                >
                  <FaArrowRightLong size={25} />
                </a>
              </div>
            );
          })}
        </div>

        {/* <div className="grid grid-cols-12">
              {products.map((prod: Product, index: number) => {
                console.log({ prod });
                return (
                  <div
                    key={index}
                    // className="col-span-full md:col-span-3  p-5 lg:p-12 flex flex-col justify-between"
                    className="col-span-full md:col-span-3  p-5 lg:p-12 flex flex-col justify-between"
                    style={{
                      backgroundColor: `#${prod.color?.pri}`,
                      color: prod?.color?.sec
                        ? `#${prod?.color?.sec}`
                        : "white",
                    }}
                  >
                    <div>
                      <h3 className="ff-heading text-2xl md:text-3xl font-bold mb-4">
                        {prod?.groupTitle}
                      </h3>
                      <ul className="list-disc marker:content-['.'] marker:block marker:text-7xl marker:leading-0 marker-top-3 ml-4 mb-6 md:text-xl">
                        {prod.operations?.map((op, index: number) => (
                          <li key={index} className="mb-3">
                            {op}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={prod.cta.url}
                      target="_blank"
                      aria-label="Visit app"
                      className="flex ml-auto text-right gap-4 mt-6"
                    >
                      <FaArrowRightLong size={25} />
                    </a>
                  </div>
                );
              })}
            </div> */}
      </Box>
      {/* </MantineProvider> */}

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
            <UsersFeedbacks />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MessageWidget />
          </Grid.Col>
        </Grid>
      </Box>

      <Footer />
    </>
  );
}
