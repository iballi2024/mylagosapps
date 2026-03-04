import { Box, Button, Card, MantineTheme, Text, Title } from "@mantine/core";
import { subOptionsData } from "./data";
import { SubscriptionType, SubscriptionTypes } from "./Index";
import numeral from "numeral";

export default function SubCards({
  colorScheme,
  selectedSubType,
}: {
  colorScheme: string;
  selectedSubType: SubscriptionType;
}) {
  return (
    <>
      {
        <Box
          component="ul"
          className="max-w-6xl mx-auto grid grid-cols-3 gap-4 items-stretch w-full"
        >
          {Object.keys(subOptionsData).map((_item, index) => {
            const item = subOptionsData[_item as keyof typeof subOptionsData];
            return (
              <Box
                component="li"
                className="col-span-full md:col-span-1"
                key={index}
              >
                <Card
                  p={40}
                  //   withBorder
                  shadow="sm"
                  h={"100%"}
                  bdrs={20}
                >
                  <Title component="h4" size="xl" fw={"bold"} ta="center">
                    {item.title}
                  </Title>
                  <Text ta={"center"}>{item.tagline}</Text>
                  <Card.Section>
                    <Text ta={"center"} my={20}>
                      <Text component="span" fw={600} fz={20}>
                        ₦
                        {numeral(
                          selectedSubType === SubscriptionTypes.MONTHLY
                            ? item.monthlyPrice
                            : item.yearlyPrice,
                        ).format("0,0")}
                      </Text>
                      <Text component="sub">
                        {selectedSubType === SubscriptionTypes.MONTHLY
                          ? `per month`
                          : `per year`}
                      </Text>
                    </Text>
                  </Card.Section>

                  <Card.Section>
                    <Text mb={15} ta={"center"}>
                      {item.description}
                    </Text>
                  </Card.Section>

                  <Card.Section
                    bdrs={20}
                    p={20}
                    style={(theme: MantineTheme) => {
                      return {
                        // backgroundColor: `rgba(${theme.colors.primary[6]}, 0.1)`,
                        backgroundColor:
                          colorScheme === "dark"
                            ? theme.colors.gray[9]
                            : theme.colors.primary[0],
                      };
                    }}
                  >
                    <Box component="ul" my={20}>
                      {item.features.map((feature, index) => (
                        <Box
                          component="li"
                          key={index}
                          mb={18}
                          fw={600}
                          className="flex gap-2 before:block before:content-[url('/assets/icons/icon-circle-check-mark.svg')]"
                        >
                          {feature}
                        </Box>
                      ))}
                    </Box>
                    <Button
                      component="a"
                      href={item.cta.url}
                      target="_blank"
                      fullWidth
                      style={(theme: MantineTheme) => {
                        return {
                          backgroundColor:
                            colorScheme === "dark"
                              ? theme.colors.gray[8]
                              : //   : theme.colors.secondary[8],
                                theme.colors.primary[8],
                          borderRadius: "100vmax",
                        };
                      }}
                      //   color={colorScheme === "dark" ? "gray" : theme.colors.secondary[6]}
                      size="lg"
                      //   style={() => ({
                      //     borderRadius: "100vmax",
                      //   })}
                      className="capitalize text-sm! md:text-lg! font-semibold!"
                    >
                      {item.cta.title}
                    </Button>
                  </Card.Section>
                </Card>
              </Box>
            );
          })}
        </Box>
      }
    </>
  );
}
