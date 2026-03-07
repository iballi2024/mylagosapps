"use client";

import { useRef, CSSProperties, ReactNode } from "react";
import {
  motion,
  useInView,
  Variants,
  TargetAndTransition,
} from "framer-motion";

// ── Types ─────────────────────────────────────────────────────────────────

interface TitleProps {
  children: ReactNode;
  order?: number;
  className?: string;
}

interface TextProps {
  children: ReactNode;
  className?: string;
  fz?: number | string;
  fw?: number | string;
}

interface CardProps {
  children: ReactNode;
  className?: string;
  shadow?: string;
  style?: CSSProperties;
}

interface BoxProps {
  children: ReactNode;
  className?: string;
  pos?: "absolute" | "relative" | "fixed" | "sticky";
  style?: CSSProperties;
}

interface IconProps {
  size?: number;
  style?: CSSProperties;
  className?: string;
}

interface PrimaryBtnProps {
  title: string;
  handleEvent?: () => void;
  size?: "sm" | "md" | "lg" | "xl";
}

interface ThemeColors {
  [shade: number]: string;
}

interface Theme {
  colors: {
    primary: ThemeColors;
    danger: ThemeColors;
    accentBlue: ThemeColors;
    dark: ThemeColors;
  };
}

// ── Shim stubs ────────────────────────────────────────────────────────────

const Title = ({ children, className }: TitleProps) => (
  <h1
    className={`text-5xl md:text-8xl font-bold leading-tight ${className ?? ""}`}
  >
    {children}
  </h1>
);

const Text = ({ children, className, fz, fw }: TextProps) => (
  <span
    className={`block ${className ?? ""}`}
    style={{ fontSize: fz, fontWeight: fw }}
  >
    {children}
  </span>
);

const Card = ({ children, className, shadow, style }: CardProps) => (
  <div
    className={`bg-white rounded-2xl px-4 py-3 shadow-${shadow ?? "sm"} ${className ?? ""}`}
    style={style}
  >
    {children}
  </div>
);

const Box = ({ children, className, pos, style }: BoxProps) => (
  <div
    className={`${pos === "absolute" ? "absolute" : ""} ${className ?? ""}`}
    style={style}
  >
    {children}
  </div>
);

const PrimaryBtn = ({ title, handleEvent }: PrimaryBtnProps) => (
  <button
    onClick={handleEvent}
    className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
  >
    {title}
  </button>
);

// ── Icon stubs ─────────────────────────────────────────────────────────────

const IoFastFoodOutline = ({ size, style }: IconProps) => (
  <span style={{ fontSize: size, ...style }}>🍔</span>
);
const TbTruckDelivery = ({ size, style }: IconProps) => (
  //   <span style={{ fontSize: size,display: 'inline-block', transform: 'scaleX(-1)', ...style }}>🚚</span>
  <span
  className="inline-block transform scale-x-[-1]"
    style={{
      fontSize: size,
      ...style,
    }}
  >
    🚚
  </span>
);
const TbRibbonHealth = ({ size, style }: IconProps) => (
  <span style={{ fontSize: size, ...style }}>🏥</span>
);

// ── Theme ─────────────────────────────────────────────────────────────────

const theme: Theme = {
  colors: {
    primary: { 6: "#0FA958" },
    danger: { 6: "#E53E3E" },
    accentBlue: { 6: "#3B82F6" },
    dark: { 0: "#C1C2C5" },
  },
};

const colorScheme: "light" | "dark" = "light";

// ── Animation helpers ─────────────────────────────────────────────────────

/** Staggered container — children animate in sequence */
const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/** Slide-up + fade for text elements */
const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Fade + scale for the hero image */
const imageFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

/** Slide-in from the right with configurable delay */
const cardSlideRight = (delay = 0.85): Variants => ({
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
});

/** Continuous vertical float */
const floatLoop = (
  yAmp = 10,
  duration = 3,
  delay = 0,
): { animate: TargetAndTransition } => ({
  animate: {
    y: [0, -yAmp, 0],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      delay,
    },
  },
});

/** Draw-on animation for SVG path */
const pathDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.5 },
  },
};

/** Pop-in + float + rotate for decorative icons */
const decorativeIconAnimate = (delay: number): TargetAndTransition => ({
  opacity: 1,
  scale: 1,
  y: [0, -12, 0],
  rotate: [0, 8, 0],
  transition: {
    opacity: { duration: 0.4, delay },
    scale: { duration: 0.4, delay },
    y: { duration: 4, ease: "easeInOut", repeat: Infinity, delay },
    rotate: { duration: 4, ease: "easeInOut", repeat: Infinity, delay },
  },
});

const creditCardIconAnimate = (delay: number): TargetAndTransition => ({
  opacity: 1,
  scale: 1,
  y: [0, -10, 0],
  rotate: [12, 20, 12],
  transition: {
    opacity: { duration: 0.4, delay },
    scale: { duration: 0.4, delay },
    y: { duration: 3.5, ease: "easeInOut", repeat: Infinity, delay },
    rotate: { duration: 3.5, ease: "easeInOut", repeat: Infinity, delay },
  },
});

// ── Component ─────────────────────────────────────────────────────────────

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="hero" ref={ref}>
      <div className="flex flex-col max-w-7xl mx-auto px-4">
        <div className="min-h-screen grid grid-cols-12 gap-y-8 md:gap-x-4 items-center mt-10">
          {/* ── LEFT: text column ── */}
          <motion.div
            className="col-span-12 md:col-span-6 order-2 md:order-1"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {/* Headline */}
            <motion.div variants={slideUp}>
              <Title order={1} className="font-bold md:mt-30">
                Convenience and Value
              </Title>
            </motion.div>

            {/* Animated SVG underline */}
            <motion.div className="mt-6 mb-8" variants={slideUp}>
              <svg
                width="539"
                height="39"
                viewBox="0 0 539 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[539px]"
              >
                <motion.path
                  d="M4.00105 35C81.1908 11.6067 295.456 -21.144 535.001 35"
                  stroke="#0FA958"
                  strokeWidth="8"
                  strokeLinecap="round"
                  variants={pathDraw}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                />
              </svg>
            </motion.div>

            {/* Body copy */}
            <motion.p
              className="text-lg md:text-xl max-w-[500px] md:leading-8 text-gray-600"
              variants={slideUp}
            >
              From island to mainland, order food, move around, shop, and get
              things done, all from one app built for the real Lagos experience.
            </motion.p>

            {/* CTA */}
            <motion.div className="my-6 md:my-10" variants={slideUp}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="inline-block"
              >
                <PrimaryBtn
                  title="Download the App"
                  handleEvent={() => alert("Download the App")}
                  size="xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: image + floating cards column ── */}
          <div className="col-span-12 md:col-span-6 order-1 md:order-2">
            <div className="relative w-full h-full max-w-95 mx-auto">
              {/* Top card */}
              <motion.div
                variants={cardSlideRight(0.75)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="absolute z-10 top-4 left-2 right-2 lg:-left-20 lg:right-[unset]"
              >
                <motion.div {...floatLoop(6, 3.2, 0)}>
                  <Card
                    shadow="sm"
                    className="p-4"
                    style={{
                      color:
                        colorScheme === "dark"
                          ? theme.colors.dark[0]
                          : theme.colors.primary[6],
                    }}
                  >
                    <Text fz={15} fw={600} className="flex items-end gap-2 max-w-60">
                      <IoFastFoodOutline
                        size={30}
                        style={{ color: theme.colors.primary[6] }}
                      />
                      Fresh Flavors from the Heart of the Mainland.
                    </Text>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Bottom cards */}
              <Box
                pos="absolute"
                className="z-10 bottom-4 lg:bottom-[5%] left-2 right-2 lg:left-[unset] lg:-right-20 flex flex-col items-start gap-4"
              >
                <motion.div
                  variants={cardSlideRight(0.95)}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="w-full flex flex-col items-start"
                >
                  <motion.div {...floatLoop(8, 3.8, 0.5)}>
                    <Card
                      shadow="sm"
                      style={{
                        color:
                          colorScheme === "dark"
                            ? theme.colors.dark[0]
                            : theme.colors.danger[6],
                      }}
                    >
                      <Text fz={15} fw={600} className="flex items-end max-w-60">
                        From Pickup to Doorstep, We Deliver.
                        <TbTruckDelivery
                          size={30}
                          style={{ color: theme.colors.danger[6] }}
                        />
                      </Text>
                    </Card>
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={cardSlideRight(1.1)}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="w-full"
                >
                  <motion.div {...floatLoop(7, 4.2, 1)}>
                    <Card
                      shadow="sm"
                      style={{
                        color:
                          colorScheme === "dark"
                            ? theme.colors.dark[0]
                            : theme.colors.accentBlue[6],
                      }}
                    >
                      <Text fz={15} fw={600} className="flex items-end  max-w-70">
                        <TbRibbonHealth
                          size={30}
                          style={{ color: theme.colors.accentBlue[6] }}
                        />
                        Accessible Healthcare for Every Lagos Family
                      </Text>
                    </Card>
                  </motion.div>
                </motion.div>
              </Box>

              {/* Decorative floating icon — sun */}
              <motion.span
                className="hidden lg:block absolute z-20 lg:-right-20 lg:top-40 text-yellow-500"
                style={{ fontSize: 80 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? decorativeIconAnimate(1.1) : { opacity: 0 }}
              >
                ☀️
              </motion.span>

              {/* Decorative floating icon — credit card */}
              <motion.span
                className="hidden lg:block absolute z-20 lg:-left-20 lg:top-40 text-pink-600"
                style={{ fontSize: 60 }}
                initial={{ opacity: 0, scale: 0.5, rotate: 12 }}
                animate={inView ? creditCardIconAnimate(1.2) : { opacity: 0 }}
              >
                💳
              </motion.span>

              {/* Hero image */}
              <motion.div
                className="z-0 relative bg-gray-100 overflow-hidden rounded-xl mt-16 md:mt-0"
                variants={imageFadeIn}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <img
                  src="/assets/images/joyful-black-male-female-best-friends-have-fun-together-take-picture-themselves-pose-making-selfie-being-good-mood-after-successful-day.png"
                  alt="Two friends smiling"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
