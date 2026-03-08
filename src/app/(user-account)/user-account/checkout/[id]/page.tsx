"use client";
import { Grid, Space, Title, Box, MantineTheme } from "@mantine/core";
import styles from "./styles.module.scss";
import Vanlagos from "../../../../(platforms)/vanlagos/page";
import { useGlobal } from "@/src/app/context/globalStore";

export default function Checkout() {
  const { colorScheme } = useGlobal();
  return (
    <>
      <div className="pt-20">
        <section>
          <div className="main-wrapper mt-8">
            <Grid gutter={30}>
              <Grid.Col
                span={{
                  base: 12,
                  md: 6,
                }}
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

                        {/* <ul>
                        <li>5% off rides on VanLagos</li>
                        <li>2 free telemedicine chats/month</li>
                        <li>5% off meals on Mainlandmeals</li>
                        <li>Early access to event spaces</li>
                        <li>3% grocery discount</li>
                      </ul> */}
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

                  <p>hello</p>

                  {/* <dl>
                  <dt>Who It&lsquo;s For</dt>
                  <dd>
                    Students, individuals, and light users who want small
                    savings across multiple services
                  </dd>

                  <dt>What You Get</dt>
                  <dd>
                    <dl>
                      <dt>Vanlagos</dt>
                      <dl>
                        <ul>
                          <li>Free ride</li>
                          <li>Free telemedicine</li>
                          <li>Free meals</li>
                        </ul>
                      </dl>
                    </dl>
                  </dd>
                </dl> */}
                </article>
              </Grid.Col>
              <Grid.Col
                span={{
                  base: 12,
                  md: 6,
                }}
              >
                <Title order={1}>Checkout</Title>
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
