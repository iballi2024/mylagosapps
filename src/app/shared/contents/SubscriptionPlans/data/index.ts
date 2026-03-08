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
  }
};
export const subOptionsData: Record<string, subOption> = {
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
