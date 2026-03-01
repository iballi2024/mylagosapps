import React from "react";
import { Carousel } from "@mantine/carousel";

export default function AppsLogosCarousel() {
  return (
    <>
      <Demo />
    </>
  );
}

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize={{ base: `${100 / 3}%`, sm: `${100 / 4}%` }}
      slideGap={{ base: 0, sm: "md" }}
      emblaOptions={{ loop: true, align: "start" }}
    >
      <Carousel.Slide bg="blue">1</Carousel.Slide>
      <Carousel.Slide bg="green">2</Carousel.Slide>
      <Carousel.Slide bg="yellow">3</Carousel.Slide>
      <Carousel.Slide bg="red">4</Carousel.Slide>
      <Carousel.Slide bg="pink">5</Carousel.Slide>
      <Carousel.Slide bg="purple">6</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
