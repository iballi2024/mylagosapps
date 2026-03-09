"use client";
import {
  Box,
  Grid,
  Text,
  Card,
  PolymorphicComponentProps,
  BoxComponentProps,
} from "@mantine/core";
import { Image } from "@mantine/core";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbRibbonHealth, TbTruckDelivery } from "react-icons/tb";
import { GiSolarPower } from "react-icons/gi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { useGlobal } from "../../context/global-store";
import { motion, Variants, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2 + i * 0.12,
    },
  }),
};

const cardFloatVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

// Float idle animation for cards
const floatTransition = (delay: number = 0) => ({
  y: [0, -6, 0],
  transition: {
    duration: 3.5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop" as const,
    delay,
  },
});

// ─── Data ─────────────────────────────────────────────────────────────────────

const list = [
  "Faster access to essential services",
  "Local businesses supporting local communities",
  "Seamless ordering and booking process",
  "Customer support that understands Lagos",
];

// ─── Motion wrappers ──────────────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BoxType =
  | (<C = "div">(
      props: PolymorphicComponentProps<C, BoxComponentProps>,
    ) => ReactNode)
  | any;
const MotionBox = motion(Box as BoxType);
const MotionCard = motion(Card as BoxType);

// ─── Component ────────────────────────────────────────────────────────────────

export default function Animated() {
  const { theme, colorScheme } = useGlobal();

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <Box component="section" ref={sectionRef}>
      <Box className="main-wrapper">
        <Grid>
          {/* ── Left Column ── */}
          <Grid.Col span={{ sx: 12, md: 6 }}>
            <motion.h4
              className="ff-heading max-w-100 text-2xl md:text-3xl xl:text-5xl font-bold mb-16 | after:content-[''] after:block after:w-75 after:mx-auto after:h-16 after:bg-[url('/assets/images/title-underline-waves.svg')] after:bg-no-repeat after:bg-center"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              custom={0}
            >
              What Benefit Will You Get
            </motion.h4>

            <Box component="ul" my={20}>
              {list.map((feature, index) => (
                <MotionBox
                  component="li"
                  key={index}
                  mb={18}
                  fw={600}
                  className="text-lg flex gap-2 before:block before:content-[url('/assets/icons/icon-circle-check-mark.svg')]"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={listItemVariants}
                  custom={index}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                >
                  {feature}
                </MotionBox>
              ))}
            </Box>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              custom={0.7}
            >
              <Text fw={700} size="xl">
                Lagos moves fast. We help you move smarter.
              </Text>
            </motion.div>
          </Grid.Col>

          {/* ── Right Column ── */}
          <Grid.Col span={{ sx: 12, md: 6 }}>
            <div className="relative w-full h-full max-w-md mx-auto">
              {/* ── Top-left floating cards ── */}
              <MotionBox
                pos="absolute"
                className="z-10 top-4 left-2 right-2 lg:-left-20 lg:right-[unset] p-4 | flex flex-col items-start gap-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <MotionCard
                  shadow="sm"
                  bdrs={{ lg: 30 }}
                  style={{
                    color:
                      colorScheme === "dark"
                        ? theme?.colors.dark[0]
                        : theme?.colors.primary[6],
                  }}
                  variants={cardFloatVariants}
                  custom={0.3}
                  whileHover={{
                    scale: 1.06,
                    rotate: -1,
                    transition: { duration: 0.25 },
                  }}
                  animate={
                    isInView ? ["visible", floatTransition(0)] : "hidden"
                  }
                >
                  <Text
                    fz={15}
                    fw={600}
                    display="flex"
                    style={{ color: theme?.colors.dark[6] }}
                    className="items-end gap-2"
                  >
                    <MdOutlineLocalGroceryStore
                      size={30}
                      style={{ color: theme?.colors.pink[6] }}
                    />
                    Groceries shopping
                  </Text>
                </MotionCard>

                <MotionCard
                  shadow="sm"
                  bdrs={{ lg: 30 }}
                  style={{
                    color:
                      colorScheme === "dark"
                        ? theme?.colors.dark[0]
                        : theme?.colors.primary[6],
                  }}
                  variants={cardFloatVariants}
                  custom={0.45}
                  whileHover={{
                    scale: 1.06,
                    rotate: 1,
                    transition: { duration: 0.25 },
                  }}
                  animate={
                    isInView ? ["visible", floatTransition(0.4)] : "hidden"
                  }
                >
                  <Text
                    fz={15}
                    fw={600}
                    display="flex"
                    style={{ color: theme?.colors.dark[6] }}
                    className="items-end gap-2"
                  >
                    <IoFastFoodOutline
                      size={30}
                      style={{ color: theme?.colors.primary[6] }}
                    />
                    Food & drinks
                  </Text>
                </MotionCard>
              </MotionBox>

              {/* ── Bottom-right floating cards ── */}
              <MotionBox
                pos="absolute"
                className="z-10 bottom-4 lg:bottom-[5%] left-2 right-2 lg:left-[unset] lg:-right-20 | flex flex-col items-start gap-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <MotionCard
                  shadow="sm"
                  bdrs={{ lg: 30 }}
                  style={{
                    color:
                      colorScheme === "dark"
                        ? theme?.colors.dark[0]
                        : theme?.colors.danger[6],
                  }}
                  variants={cardFloatVariants}
                  custom={0.5}
                  whileHover={{
                    scale: 1.06,
                    rotate: -1,
                    transition: { duration: 0.25 },
                  }}
                  animate={
                    isInView ? ["visible", floatTransition(0.6)] : "hidden"
                  }
                >
                  <Text
                    fz={15}
                    fw={600}
                    display="flex"
                    style={{ color: theme?.colors.dark[6] }}
                    className="items-end gap-2"
                  >
                    Delivery & Van hire
                    <TbTruckDelivery
                      size={30}
                      style={{ color: theme?.colors.danger[6] }}
                    />
                  </Text>
                </MotionCard>

                <MotionCard
                  shadow="sm"
                  bdrs={{ lg: 30 }}
                  style={{
                    color:
                      colorScheme === "dark"
                        ? theme?.colors.dark[0]
                        : theme?.colors.secondary[6],
                  }}
                  variants={cardFloatVariants}
                  custom={0.65}
                  whileHover={{
                    scale: 1.06,
                    rotate: 1,
                    transition: { duration: 0.25 },
                  }}
                  animate={
                    isInView ? ["visible", floatTransition(1.0)] : "hidden"
                  }
                >
                  <Text
                    fz={15}
                    fw={600}
                    display="flex"
                    style={{ color: theme?.colors.dark[6] }}
                    className="items-end gap-2"
                  >
                    <GiSolarPower
                      size={80}
                      color={theme?.colors.secondary[6]}
                    />
                    Solar accessories & services
                  </Text>
                </MotionCard>

                <MotionCard
                  shadow="sm"
                  bdrs={{ lg: 30 }}
                  style={{
                    color:
                      colorScheme === "dark"
                        ? theme?.colors.dark[0]
                        : theme?.colors.accentBlue[6],
                  }}
                  variants={cardFloatVariants}
                  custom={0.8}
                  whileHover={{
                    scale: 1.06,
                    rotate: -1,
                    transition: { duration: 0.25 },
                  }}
                  animate={
                    isInView ? ["visible", floatTransition(1.4)] : "hidden"
                  }
                >
                  <Text
                    fz={15}
                    fw={600}
                    display="flex"
                    style={{ color: theme?.colors.dark[6] }}
                    className="items-end gap-2"
                  >
                    <TbRibbonHealth
                      size={30}
                      style={{ color: theme?.colors.accentBlue[6] }}
                    />
                    Telemedicine
                  </Text>
                </MotionCard>
              </MotionBox>

              {/* ── Main image ── */}
              <motion.div
                className="rounded-2xl overflow-hidden"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={imageVariants}
              >
                <Image
                  src="/assets/images/black-and-white-laptop.png"
                  width={1800}
                  height={2116}
                  alt="black and white laptop"
                />
              </motion.div>
            </div>
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  );
}
