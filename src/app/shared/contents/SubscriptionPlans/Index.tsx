"use client";
import { useState } from "react";
import Navtab from "./Navtab";
import SubCards from "./SubCards";
import { Title } from "@mantine/core";
import SectionTitle from "../../components/SectionTitle";

const subOptions = [
  {
    title: "Monthly",
    price: "0.99",
    description:
      "Get access to all our services for a monthly fee. No cancellation fees.",
    features: [
      "Access to all our services",
      "No cancellation fees",
      "No hidden fees",
      "No setup fees",
      "No recurring fees",
    ],
  },
  {
    title: "Yearly",
    price: "1.99",
    description:
      "Get access to all our services for a yearly fee. No cancellation fees.",
    features: [
      "Access to all our services",
      "No cancellation fees",
      "No hidden fees",
      "No setup fees",
      "No recurring fees",
    ],
  },
];

export const SubscriptionTypes = {
  MONTHLY: "MONTHLY",
  YEARLY: "YEARLY",
} as const;

export type SubscriptionType =
  (typeof SubscriptionTypes)[keyof typeof SubscriptionTypes];

export default function SubscriptionPlans({title, titleOrder}: {title: string, titleOrder: 1 | 2 | 3 | 4 | 5 | 6}) {
  const [selectedSubType, setSelectedSubType] = useState<SubscriptionType>(
    SubscriptionTypes.MONTHLY,
  );
  return (
    <>
      <section>
        {/* <Title mx={'auto'} fz={50} className="max-w-200 mx-auto | ff-heading text-2xl md:text-3xl xl:text-5xl font-bold text-center mb-10 | after:content-[''] after:block after:w-75 after:mx-auto after:h-16 after:bg-[url('/assets/images/title-underline-waves.svg')] after:bg-no-repeat after:bg-center">
          Power Your Lifestyle with the Right Plan
        </Title> */}
        <SectionTitle title={title} fontSize={40} order={titleOrder}/>
        {/* <p className="text-center">Choose plan that works best for you, feel free to contact us</p> */}
        {/* <div className="py-20"></div> */}

        <Navtab
          selectedSubType={selectedSubType}
          setSelectedSubType={setSelectedSubType}
        />
        <div className="my-10"></div>
        <SubCards selectedSubType={selectedSubType} />
      </section>
    </>
  );
}
