type subOption = {
  _id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  yearlyPrice: number;
  monthlyPrice: number;
  imageUrl: string;
  cta: {
    title: string;
    url: string;
    icon: string;
  };
  // fullDetails?: {
  //   [key: string]: string | number | boolean;
  // };
  // fullDetails?: Record<string, string | number | boolean>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fullDetails?: any;
};
export const packageOptionsData: Record<string, subOption> = {
  bronze: {
    _id: "bronze",
    title: "🥇Bronze",
    tagline: "Premium Lagos Lifestyle",
    description:
      "Perfect for everyday Lagos living. Basic access across transport, food, healthcare and shopping.",
    features: [
      "5% off rides on VanLagos",
      "2 free telemedicine chats/month",
      "5% off meals on Mainlandmeals",
      "Early access to event spaces",
      "3% grocery discount",
    ],
    yearlyPrice: 30_999.88, //35_999.88,
    monthlyPrice: 2_999.99,
    imageUrl: "/images/home/silver.png",
    cta: {
      title: "Subscribe",
      url: "#",
      icon: "icon-arrow-right-long",
    },
    fullDetails: {
      targetUser: "Students, individuals, and light users who want small savings across multiple services",
      benefits: {
        "van hire": [
          "Access to VanLagos' shared ride options",
          "5% discount on every ride/delivery",
          "Priority booking during off-peak hours",
        ],
        "meals ordering": [
          "5% discount on all meal orders",
          "Exclusive access to budget-friendly meal options",
          "Early access to new menu items",
          "Free delivery once per month"
        ],
        "telemedicine": [
          "2 free telemedicine chats per month",
          "Access to general practitioners and specialists",
          "Priority booking for telemedicine sessions",
        ],
        "events": [
          "Early access to event space bookings",
          "Exclusive discounts on select events",
          "Priority booking for popular events and studios",
        ],
        "groceries": [
          "3% discount on grocery orders",
          "Access to exclusive grocery deals",
          "Priority delivery slots during peak times",
        ],
      }
    }
  },
  silver: {
    _id: "silver",
    title: "🥈Silver",
    tagline: "Smart Value Plan",
    description:
      "Designed for families and professionals who use LagosApps regularly.",
    features: [
      "10% ride discount",
      "5 telemedicine sessions/month",
      "10% meal discount",
      "7% grocery discount",
      "Event & studio priority booking",
    ],
    yearlyPrice: 100_999.88, //119_999.88,
    monthlyPrice: 9_999.99,
    imageUrl: "/images/home/bronze.png",
    cta: {
      title: "Subscribe",
      url: "#",
      icon: "icon-arrow-right-long",
    }
  },
  gold: {
    _id: "gold",
    title: "🥇Gold",
    tagline: "Best Value",
    description:
      "Full access. Maximum savings. VIP experience across all LagosApps services.",
    features: [
      "20% ride discount",
      "Unlimited telemedicine",
      "15% meals & groceries",
      "15% event & studio discounts",
      "10% solar installation discount",
    ],
    yearlyPrice: 200_999.88, //239_999.88,
    monthlyPrice: 19_999.99,
    imageUrl: "/images/home/gold.png",
    cta: {
      title: "Subscribe",
      url: "#",
      icon: "icon-arrow-right-long",
    }
  },
};
