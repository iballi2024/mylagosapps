import { Grid } from "@mantine/core";
import ServiceCard from "./ServiceCard";
import { sampleData } from "./sample-data";

export default function ServicePlatforms() {
  return (
    <>
      <Grid gutter={20}>
        {sampleData.map((item: any, index: number) => (
          <Grid.Col
            span={{ base: 12, sm: 6, md: 3 }}
            offset={{ base: 0, md: index === 4 ? 3 : 0 }}
            key={index}
          >
            <ServiceCard {...item} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
