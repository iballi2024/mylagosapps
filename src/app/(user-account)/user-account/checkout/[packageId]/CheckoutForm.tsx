import { Button, Card, Grid, Select, TextInput } from "@mantine/core";

export default function CheckoutForm() {
  return (
    <>
      <Card shadow="xs" padding="lg" radius="md">
        <form>
          <Grid gutter="md">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="Card Number"
                placeholder="Enter your card number"
                required
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="Expiry Date"
                placeholder="Enter expiry date"
                required
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput label="CVV" placeholder="Enter CVV" required />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="Cardholder Name"
                placeholder="Enter cardholder name"
                required
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                label="Billing Address"
                placeholder="Enter billing address"
                required
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput label="State" placeholder="Enter state" required />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Select
                label="Country"
                placeholder="Select country"
                required
                data={[
                  { value: "usa", label: "United States" },
                  { value: "nigeria", label: "Nigeria" },
                  { value: "uk", label: "United Kingdom" },
                  { value: "canada", label: "Canada" },
                ]}
              />
            </Grid.Col>
            <Grid.Col
              span={12}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button type="submit" fullWidth size="lg" color="yellow">
                Pay Now
              </Button>
            </Grid.Col>
          </Grid>
        </form>
      </Card>
    </>
  );
}
