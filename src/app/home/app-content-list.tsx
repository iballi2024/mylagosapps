import { ReactNode } from "react";

export type Product = {
  groupTitle?: string;
  title: string;
  description: string;
  operations?: string[];
  image: string;
  cta: {
    title: string;
    url: string;
    icon?: ReactNode;
  };
  color?: {
    pri?: string;
    sec?: string;
  };
};

export const products: Product[] = [
  {
    groupTitle: "Green Energy",
    title: "Mainlandsolar",
    description:
      "Power your home or business with affordable, reliable solar energy solutions, built for Lagos living.",
    operations: [
      "Solar Panel Sales",
      "Solar System Installation",
      "System Maintenance & Repair",
      "Solar Battery Solutions",
      "Energy Consultation & System Design",
    ],
    cta: {
      title: "Learn more",
      url: "http://mainlandsolar.com",
      icon: (
        <>
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </>
      ),
    },
    image: "mainlandsolar-brandlogo.png",
    color: {
      pri: "F57C00",
      sec: "",
    },
  },
  {
    groupTitle: "Local Eats",
    title: "Mainlandmeals",
    description:
      "Your favourite local meals and snacks, delivered hot and fresh",
    operations: [
      "Meal Delivery",
      "Snack Packs",
      "Catering Services",
      "Subscription Plans",
      "Custom Orders",
    ],
    cta: {
      title: "Book Now",
      url: "http://mainlandmeals.com",
      icon: (
        <>
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </>
      ),
    },
    image: "mainlandmeals-brandlogo.png",
    color: {
      pri: "E94E3F",
      sec: "40120D",
    },
  },
  {
    groupTitle: "Groceries",
    title: "LagosCart",
    description:
      "Skip the market traffic. Order groceries, essentials, and household items straight to your door.",
    operations: [
      "Grocery Delivery",
      "Household Essentials",
      "Beverage & Snacks",
      "Bulk Orders",
      "Scheduled Delivery",
    ],
    cta: {
      title: "Learn more",
      url: "http://lagoscart.com",
      icon: (
        <>
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </>
      ),
    },
    image: "lagoscart-brandlogo.png",
    color: {
      pri: "28A745",
      sec: "",
    },
  },
  {
    groupTitle: "Swift Transit",
    title: "Vanlagos",
    description:
      "Move goods, rent vans, or schedule deliveries anywhere in Lagos. Reliable, secure, and right on time",
    operations: [
      "Goods Delivery",
      "Van Rentals",
      "Scheduled Pickups",
      "Bulk Transport",
      "Live Tracking",
    ],
    cta: {
      title: "Learn more",
      url: "http://vanlagos.com",
      icon: (
        <>
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </>
      ),
    },
    image: "vanlagos-brandlogo.png",
    color: {
      pri: "003366",
      sec: "",
    },
  },
  {
    groupTitle: "Digital Care",
    title: "Mainland clinics",
    description:
      "Book appointments, consult doctors, or get prescriptions from trusted medical professionals all within the app.",
    operations: [
      "Doctor Consultations",
      "Appointment Scheduling",
      "Health Monitoring",
      "Medical Records Access",
    ],
    cta: {
      title: "Learn more",
      url: "http://mainlandclinics.com",
      icon: (
        <>
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </>
      ),
    },
    image: "mainlandclinics-brandlogo.png",
    color: {
      pri: "2563EB",
      sec: "",
    },
  },
  {
    groupTitle: "Event Central",
    title: "Mainlandevents",
    description:
      "Plan, book, and manage your next Lagos event — from venues to vendors — all in one simple dashboard.",
    operations: [
      "Venue Booking",
      "Vendor Management",
      "Event Scheduling",
      "Ticketing & RSVPs",
      "Budget Planning",
    ],

    cta: {
      title: "Learn more",
      url: "http://mainlandevents.com",
      icon: (
        <>
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </>
      ),
    },
    image: "mainlandevents-brandlogo.png",
    color: {
      pri: "2D3436",
      sec: "",
    },
  },
  {
    groupTitle: "Media Studios",
    title: "Studiosmainland",
    description:
      "Find creative studios for photography, music, or content production. Book by the hour, the day, or for your next big shoot.",
    operations: ["Studio Booking", "Equipment Rental", "Creative Workshops"],
    cta: {
      title: "Learn more",
      url: "http://studiosmainland.com",
      icon: (
        <>
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </>
      ),
    },
    image: "studiosmainland-brandlogo.png",
    color: {
      pri: "BFA2DB",
      sec: "",
    },
  },
];
