"use client";
import {
  Box,
  Button,
  MantineProvider,
  useMantineTheme,
  useComputedColorScheme,
} from "@mantine/core";
import Toolbar from "../shared/components/Toolbar/Index";
import Image from "next/image";
import PrimaryBtn from "../shared/components/buttons/PrimaryBtn";
import AppsLogosCarousel from "./AppsLogosCarousel";
import AppCarousel from "./AppCarousel";

export default function Home() {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme();

  const gradient =
    colorScheme === "dark"
      ? `linear-gradient(
        to bottom right,
        ${theme.colors.teal[9]}20,
        ${theme.colors.dark[8]},
        ${theme.colors.teal[9]}20
      )`
      : `linear-gradient(
        to bottom right,
        ${theme.colors.teal[0]},
        ${theme.white},
        ${theme.colors.teal[0]}
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

      {/* , backgroundAttachment: "fixed"  */}
      <Box style={{ background: gradient }}>
        {/* <div className="|  bg-linear-to-br via-[#FFFFFF] from-[#52bda927] to-[#52bda927] | "> */}
        <section className="hero">
          {/* <div className="md:min-h-[80vh] max-w-8xl mx-auto |  bg-linear-to-br via-[#FFFFFF] from-[#52BDAA] to-[#52BDAA] | px-4 sm:px-6 lg:px-8"> */}
          {/*  min-h-[200vh] md:min-h-[120vh] */}
          {/* <div className="flex flex-col max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"> */}
          <div className="flex flex-col main-wrapper">
            <div className="lg:h-screen lg:max-h-200 | grid grid-cols-12 gap-y-8 md:gap-x-4 items-center mt-10">
              <div className="col-span-12 md:col-span-6 order-2 md:order-1">
                <h1 className="ff-heading text-5xl md:text-8xl font-bold md:mt-30">
                  Convenience and Value
                </h1>

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
                  From island to mainland, order food, move around, shop, and
                  get things done, all from one app built for the real Lagos
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
                <div className="bg-gray-100 w-full max-w-95 mx-auto overflow-hidden rounded-xl mt-16 md:mt-0">
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
        </section>
        <div className="my-20"></div>
        <section className="pb-16">
          <h2 className="ff-heading text-2xl md:text-4xl font-bold text-center mb-6">
            Apps That Power Daily Life in Lagos
          </h2>

          {/* <AppsLogosCarousel />

          <hr /> */}
          <AppCarousel />
        </section>

        <Box
          style={{
            background:
              colorScheme === "dark"
                ? ``
                : `#F9F8FE`,
          }}
        >
          <section className="py-16">
            <div className="main-wrapper grid grid-cols-12 gap-y-12 md:gap-6">
              <div className="col-span-12 md:col-span-7">
                <h2 className="ff-heading text-2xl md:text-6xl font-semibold mb-5">
                  Meet the LagosApps Ecosystem
                </h2>
                <p className="text-lg max-w-[700px] md:leading-8.5">
                  LagosApps brings together the services Lagosians use every day
                  into one connected ecosystem designed for real life in Lagos.
                  Whether you’re ordering hot meals through Mainlandmeals,
                  booking reliable transport with Vanlagos, powering your home
                  or office via Mainlandsolar, or shopping fresh groceries from
                  Lagoscarts, LagosApps simplifies your day. From Island to
                  Mainland, we help you move, eat, shop, and live smarter — all
                  from one trusted network.
                </p>
                <div className="my-6 md:my-10"></div>

                <PrimaryBtn
                  title="Download the App"
                  handleEvent={() => alert("Download the App")}
                  size="xl"
                />
              </div>
              <div className="col-span-12 md:col-span-5 xbg-red-400 order-1 md:order-2">
                <ul className="flex flex-col gap-y-6">
                  <li className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-16 min-w-16 max-w-16 p-4 bg-white shadow rounded-lg">
                      <Image
                        src="/assets/icons/icon-everyday-convinience.svg"
                        alt="Everyday convenience"
                        width={25}
                        height={25}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <h3 className="ff-heading text-2xl font-extrabold mb-2">
                        Everyday Convenience
                      </h3>
                      <p className="text-lg">
                        Order food, shop groceries, hire a van, or get solar
                        solutions without switching platforms. We bring
                        essential services together so you can get more done
                        with less stress.
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-16 min-w-16 max-w-16 p-4 bg-white shadow rounded-lg">
                      <Image
                        src="/assets/icons/icon-reliable-local-solutions.svg"
                        alt="Everyday convenience"
                        width={25}
                        height={25}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <h3 className="ff-heading text-2xl font-extrabold mb-2">
                        Reliable Local Solutions
                      </h3>
                      <p className="text-lg">
                        Built specifically for the Lagos environment, our
                        services understand traffic, power needs, neighborhood
                        logistics, and real-time delivery challenges — so you
                        don’t have to.
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-16 min-w-16 max-w-16 p-4 bg-white shadow rounded-lg">
                      <Image
                        src="/assets/icons/icon-service-that-makes-sense.svg"
                        alt="Everyday convenience"
                        width={25}
                        height={25}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <h3 className="ff-heading text-2xl font-extrabold mb-2">
                        Value That Makes Sense
                      </h3>
                      <p className="text-lg">
                        Transparent pricing, trusted vendors, and dependable
                        service ensure you get quality and affordability every
                        time you use LagosApps.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </Box>

        {/* </div> */}
      </Box>
      {/* </MantineProvider> */}

      {/* This is the Homepage
      <div></div>
      <Button variant="filled" ml={3} color="green">
        Button
      </Button> */}

      <div className="hidden min-h-[90vh]">
        {/* <div className="p-6 bg-amber-300 font-extrabold text-3xl"> */}
        <div className="p-6 font-extrabold text-3xl">
          <div className="bg-primary-200">Hello</div>
          <div className="bg-[]">Hi</div>

          <Button color="primary" variant="outline">
            Button 1
          </Button>
          <Button color="primary" variant="filled">
            Button 2
          </Button>
          <Button color="primary" variant="light">
            Button 3
          </Button>
          <hr />
          <Button color="secondary" variant="outline">
            Button 1
          </Button>
          <Button color="secondary" variant="filled">
            Button 2
          </Button>
          <Button color="secondary" variant="light">
            Button 3
          </Button>
        </div>
        <p>Ibrahim</p>
      </div>
    </>
  );
}
