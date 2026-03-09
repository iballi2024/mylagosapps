import { FaShoppingBag } from "react-icons/fa";
import { FaBook, FaSolarPanel, FaVanShuttle } from "react-icons/fa6";
import { MdGrass } from "react-icons/md";
import { TbRibbonHealth } from "react-icons/tb";

export const sampleData = [
  {
    title: "Solar, Renewables & More",
    tagline: "Clean Energy Solutions",
    description:
      "Power your home or business with reliable solar panels, batteries, and inverter systems. Discover sustainable energy solutions designed for modern Lagos living",
    icon: (
      <>
        <FaSolarPanel size={50} className="mx-auto" />
      </>
    ),
    color: "green",
    cta: {
      title: "Learn More",
      url: "#",
    },
  },
  {
    title: "Cars, Vans & Rides",
    tagline: "Smart Transportation",

    description:
      "Book vans, rent vehicles, or arrange rides for personal trips, logistics, or group travel across Lagos with trusted transport providers.",
    icon: (
      <>
        <FaVanShuttle size={50} className="mx-auto" />
      </>
    ),
    cta: {
      title: "Hire Now",
      url: "#",
    },
  },
  {
    title: "Food, Groceries & Household",
    tagline: "Everyday Essentials",
    description:
      "Order fresh meals, groceries, and household essentials from trusted local vendors and have them delivered directly to your doorstep.",
    icon: (
      <>
        <FaShoppingBag size={50} className="mx-auto" />
      </>
    ),
    cta: {
      title: "Shop Now",
      url: "#",
    },
  },
  {
    title: "Books (Coming Soon)",
    tagline: "Books & Knowledge",
    description:
      "Browse a growing collection of books, learning materials, and digital resources to expand your knowledge and inspire creativity.",
    icon: (
      <>
        <FaBook size={50} className="mx-auto" />
      </>
    ),
    cta: {
      title: "Coming Soon",
      url: "#",
    },
  },
  {
    title: "Health & Wellness",
    tagline: "Care You Can Trust",
    description:
      "Consult doctors, book medical appointments, and access professional healthcare services anytime through trusted telemedicine partners.",
    icon: (
      <>
        <TbRibbonHealth size={50} className="mx-auto" />
      </>
    ),
    cta: {
      title: "Get Care",
      url: "#",
    },
  },
  {
    title: "A Better You",
    tagline: "Personal Growth",
    description:
      "Explore services designed to help you improve your lifestyle, productivity, wellness, and personal development.",
    icon: (
      <>
        <MdGrass size={50} className="mx-auto" />
      </>
    ),
    cta: {
      title: "Start Your Journey",
      url: "#",
    },
  },
];
