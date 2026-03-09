"use client";
import { Carousel } from "@mantine/carousel";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Product, products } from "./app-content-list";
import {
  Box,
  Card,
  Image,
  MantineProvider,
  MantineTheme,
  Text,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useGlobal } from "../context/global-store";

export default function ProductsSlider() {
  const { theme, colorScheme } = useGlobal();
  return (
    <>
      {/* <MantineProvider
        theme={{
          components: {
            Carousel: {
              styles: () => ({
                root: {
                  // backgroundColor: colorScheme === "dark" ? `red` : `#F9F8FE`,
                  //   backgroundColor: "red",
                  //   color: "green",
                },
                control: {
                  backgroundColor: "transparent",
                  color: colorScheme === "dark" ? "red" : "",
                  //   color: colorScheme === "dark" ? `black` : theme.colors.primary[6],
                  border: "0px",
                  boxShadow: "none",
                  fontSize: "20px",
                  "&:hover": {
                    backgroundColor: "blue",
                    color: "red",
                  },
                },
                indicators: {
                  bottom: "-20px",
                },
              }),
            },
          },
        }}
      > */}
      <Carousel
        withIndicators
        slideSize={{ base: "100%", sm: `${100 / 3}%`, md: `${100 / 4}%` }}
        emblaOptions={{ dragFree: true, loop: true, align: "start" }}
        slideGap="md"
        previousControlIcon={<GrPrevious />}
        nextControlIcon={<GrNext />}
        styles={() => {
          return {
            control: {
              backgroundColor: "transparent",
              color:
                colorScheme === "dark"
                  ? theme?.colors.gray[0]
                  : theme?.colors.gray[6],
              border: "0px",
              boxShadow: "none",
              fontSize: "25px",
              "&:hover": {
                backgroundColor: "blue",
                color: "red",
              },
            },
            indicators: {
              bottom: "-20px",
            },
          };
        }}
      >
        {products.map((prod: Product, index: number) => {
          return (
            <Carousel.Slide key={index} mb={20}>
              <Box component="div" key={index} className="h-full">
                {/* <Box
                      style={{
                        color: colorScheme === "dark" ? `` : `#F9F8FE`,
                      }}
                    ></Box> */}
                <Card
                  className="rounded-2xl border-0 h-full shadow-sm! flex flex-col gap-4 justify-between"
                  padding={"xl"}
                  bdrs={20}
                >
                  <div className="flex flex-col justify-between gap-2">
                    <div>
                      {/* <div className="h-[90px] w-auto mx-auto"> */}
                      <div className="h-auto w-[120px] mx-auto mb-8">
                        <Image
                          src={`assets/images/business-brands/${prod.image}`}
                          alt="Mainlandmeals"
                          width={2000}
                          height={1272}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h5 className="text-2xl font-bold tracking-tight">
                        {prod.title}
                      </h5>
                    </div>
                    <p className="font-normal">{prod.description}</p>
                  </div>
                  {
                    <Text
                      component={"a"}
                      style={() => ({
                        color:
                          colorScheme === "dark"
                            ? ``
                            : theme?.colors.secondary[6],
                        fontWeight: 500,
                        fontSize: "inherit",
                      })}
                      href={prod.cta.url}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center text-primary-light font-semibold transform transition-transform  duration-300 
               hover:translate-x-2 hover:scale-105"
                    >
                      {prod.cta.title}
                      {prod.cta.icon && prod.cta.icon}
                    </Text>
                  }
                </Card>
              </Box>
              {/* <div
                // className="col-span-full md:col-span-3  p-5 lg:p-12 flex flex-col justify-between"
                className="col-span-full md:col-span-3  p-5 lg:p-12 flex flex-col justify-between h-full"
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
              </div> */}
            </Carousel.Slide>
          );
        })}
        {/* <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide> */}
        {/* ...other slides */}
      </Carousel>
      {/* </MantineProvider> */}
    </>
  );
}
