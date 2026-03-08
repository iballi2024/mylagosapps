"use client";
import { Box, Button, Grid, Text, Title, Card, Space } from "@mantine/core";
import Toolbar from "../shared/components/Toolbar/Index";
import { Image } from "@mantine/core";
import PrimaryBtn from "../shared/components/buttons/PrimaryBtn";
import AppsLogosCarousel from "./AppsLogosCarousel";
import AppCarousel from "./AppCarousel";
import { FaArrowRightLong, FaRegCreditCard } from "react-icons/fa6";
import { Product, products } from "./app-content-list";
import ProductsSlider from "./ProductsSlider";
import SubscriptionPlans from "../shared/contents/SubscriptionPlans/Index";
import Footer from "../shared/Footer/Index";
import { useGlobal } from "../context/globalStore";
import UsersFeedbacks from "./UsersFeedbacks/Index";
import MessageWidget from "./MessageWidget/Index";
import HeroSection from "./HeroSection/Index";
import LagosAppsEcosystemSection from "./LagosAppsEcosystemSection/Index";
import BenefitSection from "./BenefitSection/Index";
import SectionTitle from '../shared/components/SectionTitle';

export default function Home() {
  const { theme, colorScheme } = useGlobal();

  const gradient =
    colorScheme === "dark"
      ? `linear-gradient(
        to bottom right,
        ${theme?.colors.teal[9]}20,
        ${theme?.colors.dark[8]},
        ${theme?.colors.teal[9]}20
      )`
      : `linear-gradient(
        to bottom right,
        ${theme?.colors.teal[0]},
        ${theme?.white},
        ${theme?.colors.teal[0]}
      )`;

  return (
    <>
      {/* Toolbar */}
      <Toolbar />
      {/*  */}

      <Box pb={{ base: "100px", xl: "100px" }} style={{ background: gradient }}>
        <HeroSection />

        <Space h={50} />
        <Box component="section">
          <SectionTitle
            title="Apps That Power Daily Life in Lagos"
            fontSize={40}
            order={2}
          />
          <AppCarousel />
        </Box>

        <Box
          style={{
            background: colorScheme === "dark" ? `` : `#F9F8FE`,
          }}
        >
          <LagosAppsEcosystemSection />
        </Box>
        

        <Space h={50} />

        <Box component="section">
          <div className="main-wrapper">
            <SectionTitle title="What You Can Do on LagosApp" fontSize={40} order={3}/>
            <Space h={50} />
            <ProductsSlider />
          </div>
        </Box>

        <div className="py-20"></div>
        <SubscriptionPlans
          title="Power Your Lifestyle with the Right Plan"
          titleOrder={4}
        />
        <Space h={120} />

        <BenefitSection />
      </Box>

      <Box
        component="section"
        py={{ base: 40, lg: 80 }}
        style={() => ({
          backgroundColor: theme?.colors.dark[6],
          color: "white",
        })}
      >
        <Grid gutter={{ base: 30, md: 30, lg: 50 }} className="main-wrapper">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <UsersFeedbacks />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <MessageWidget />
          </Grid.Col>
        </Grid>
      </Box>

      <Footer />
    </>
  );
}
