"use client";

import React, { useEffect, useRef, useState } from "react";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

type BrandLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  style: React.CSSProperties;
};

const logos: BrandLogo[] = [
  {
    src: "/assets/images/business-brands/lagoscart-gray.png",
    alt: "lagoscart",
    width: 200,
    height: 200,
    style: {
      width: "auto",
    },
  },
  {
    src: "/assets/images/business-brands/vanlagos-gray.png",
    alt: "vanlagos",
    width: 200,
    height: 200,
    style: {
      width: "auto",
    },
  },
  // {
  //     src: "/assets/images/business-brands/mainlandsolar-gray.png",
  //     alt: "mainlandsolar",
  //     width: 200,
  //     height: 200,
  //     style: {
  //         width: 'auto'
  //     }
  // },
  {
    src: "/assets/images/business-brands/studiosmainland-gray.png",
    alt: "studiosmainland",
    width: 200,
    height: 200,
    style: {
      width: "auto",
    },
  },
  {
    src: "/assets/images/business-brands/mainlandmeals-gray.png",
    alt: "mainlandmeals",
    width: 200,
    height: 200,
    style: {
      width: "auto",
    },
  },
  {
    src: "/assets/images/business-brands/mainlandclinics-gray.png",
    alt: "mainlandclinics",
    width: 200,
    height: 200,
    style: {
      width: "auto",
    },
  },
  {
    src: "/assets/images/business-brands/mainlandevents-gray.png",
    alt: "mainlandevents",
    width: 200,
    height: 200,
    style: {
      // width: '120px'
      width: "auto",
    },
  },
  //
  {
    src: "/assets/images/business-brands/vanlagos-gray.png",
    alt: "vanlagos",
    width: 200,
    height: 200,
    style: {
      width: "auto",
    },
  },
  {
    src: "/assets/images/business-brands/mainlandsolar-gray.png",
    alt: "mainlandsolar",
    width: 200,
    height: 200,
    style: {
      width: "auto",
    },
  },

  {
    src: "/assets/images/business-brands/lagoscart-gray.png",
    alt: "lagoscart",
    width: 200,
    height: 200,
    style: {
      width: "auto",
    },
  },
  {
    src: "/assets/images/business-brands/studiosmainland-gray.png",
    alt: "studiosmainland",
    width: 200,
    height: 200,
    style: {
      width: "auto",
    },
  },
  {
    src: "/assets/images/business-brands/mainlandmeals-gray.png",
    alt: "mainlandmeals",
    width: 200,
    height: 200,
    style: {
      width: "auto",
    },
  },
  {
    src: "/assets/images/business-brands/mainlandevents-gray.png",
    alt: "mainlandevents",
    width: 200,
    height: 200,
    style: {
      // width: '120px'
      width: "auto",
    },
  },
  {
    src: "/assets/images/business-brands/mainlandclinics-gray.png",
    alt: "mainlandclinics",
    width: 200,
    height: 200,
    style: {
      width: "auto",
    },
  },
];

export default function AppCarousel() {
  const [list, setList] = useState<BrandLogo[]>([]);
  const autoScroll = useRef(
    // AutoScroll({ speed: 2, stopOnInteraction: false })
    AutoScroll({
      speed: 1, // smaller = smoother
      stopOnInteraction: false, // don’t stop on hover/drag
      stopOnMouseEnter: false, // keep going on hover
    }),
  );

  useEffect(() => {
    const x = [...logos];
    // Iterate from the end of the array backwards
    for (let i = x.length - 1; i > 0; i--) {
      // Generate a random index 'j' from 0 up to 'i' (inclusive)
      const j = Math.floor(Math.random() * (i + 1));

      // Swap elements at indices 'i' and 'j'
      // This uses array destructuring for a concise swap
      [x[i], x[j]] = [x[j], x[i]];
    }

    setList(x); // Return the shuffled array

    return () => {};
  }, []);

  return (
    <>
      <div className="main-wrapper">
        <Carousel
          height={100}
          // slideSize="20%"
          slideSize={{ base: "40%", sm: "25%", md: "15%" }}
          // slideGap={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
          slideGap={{ base: "lg" }}
          emblaOptions={{
            loop: true,
            dragFree: false,
            align: "center",
          }}
          withControls={false}
          withIndicators={false}
          plugins={[autoScroll.current]}
        >
          {list.map((logo: BrandLogo, index: number) => {
            return (
              <CarouselSlide key={index}>
                <div className="flex justify-center items-center h-full w-full _bg-gray-100">
                  {/* <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} style={logo.style} /> */}
                  <Image
                    src={logo.src}
                    alt={logo.alt ?? "brand logo"}
                    width={logo.width}
                    height={logo.height}
                    style={logo.style}
                  />
                </div>
              </CarouselSlide>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
