"use client";
import { Grid, Space, Title, Box, MantineTheme } from "@mantine/core";
import styles from "./styles.module.scss";
import { useGlobal } from "@/src/app/context/globalStore";
import { packageOptionsData } from "@/src/app/shared/contents/SubscriptionPlans/data";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import CheckoutForm from "./CheckoutForm";
import { FaArrowLeft } from "react-icons/fa6";
// import Paystack from "./Paystack";
// import PaystackButton from "./PaystackButton";

export default function Checkout() {
  /**Context API */
  const { colorScheme } = useGlobal();

  /**React Hooks */
  const params = useParams();
  const { packageId } = params as { packageId: string };
  console.log({ packageId });

  useEffect(() => {
    console.log({ packageOptionsData });
    const data = packageOptionsData["bronze"];
    console.log({ data });
  }, []);
  return (
    <>
      <div className="pt-20">
        <section>
          <div className="main-wrapper mt-8">
            <div className="mb-4 font-bold">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="cursor-pointer  text-lg flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <FaArrowLeft style={{ display: "inline", marginRight: 5 }} />
                Back
              </button>
            </div>
            <Grid gutter={30}>
              <Grid.Col
                span={{
                  base: 12,
                  md: 6,
                }}
                order={{ base: 2, md: 1 }}
              >
                <article>
                  <Title order={2} fz={20}>
                    Who It&lsquo;s For
                  </Title>
                  <p>
                    Students, individuals, and light users who want small
                    savings across multiple services
                  </p>

                  <Box
                    style={(theme: MantineTheme) => ({
                      backgroundColor:
                        colorScheme === "dark"
                          ? `rgba(255, 255, 255, 0.1)`
                          : theme.colors.gray[0],
                      borderRadius: 10,
                      padding: 20,
                      marginTop: 20,
                    })}
                    className={styles["data-list"]}
                  >
                    <Space h={30} />
                    <Title order={3} fz={22}>
                      What You Get
                    </Title>
                    <p>
                      Students, individuals, and light users who want small
                      savings across multiple services
                    </p>

                    <Space h={30} />
                    <dl>
                      <dt>Vanlagos</dt>
                      <dd>
                        <ul>
                          <li>5% discount on every ride</li>
                          <li>Priority booking during off-peak hours</li>{" "}
                        </ul>
                      </dd>
                      <dt>Mainlandclinics</dt>
                      <dd>
                        <ul>
                          <li>2 free telemedicine consultations/month</li>
                          <li>10% discount on prescriptions</li>
                        </ul>
                      </dd>
                      <dt>Mainlandmeals</dt>
                      <dd>
                        <ul>
                          <li>5% discount on food orders</li>
                          <li>Free delivery once per month</li>
                        </ul>
                      </dd>
                    </dl>
                  </Box>
                </article>
              </Grid.Col>
              <Grid.Col
                span={{
                  base: 12,
                  md: 6,
                }}
                order={{ base: 1, md: 2 }}
              >
                <Title order={1}>Checkout</Title>

                <Space h={20} />
                {/* <Paystack /> */}
                <CheckoutForm />
                <Space h={20} />
                {/* <PaystackButton email={"customer@email.com"} amount={20000} /> */}
              </Grid.Col>
            </Grid>
            {/* <Space h={100} />
                <SubscriptionPlans
                  title="Power Your Lifestyle with the Right Plan"
                  titleOrder={1}
                /> */}
            {/* Subscriptions
                <hr />
                <div className="min-h-screen bg-red-200">Subscription</div>
                <div className="min-h-screen bg-blue-200"></div> */}
          </div>
        </section>
      </div>
    </>
  );
}
