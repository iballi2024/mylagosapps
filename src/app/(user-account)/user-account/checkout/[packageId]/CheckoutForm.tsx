"use client";
import { environment } from "@/src/app/environment/environment";
import { Button, Card, Grid, Select, TextInput } from "@mantine/core";

// const PaystackButton = dynamic(
//   () => import("react-paystack").then((mod) => mod.PaystackButton),
//   { ssr: false },
// );

export default function CheckoutForm() {
  const publicKey = environment.paystack.publicKey || "";

  const config = {
    reference: new Date().getTime().toString(),
    email: "customer@email.com",
    amount: 500000, // amount in kobo (₦5000)
    publicKey: publicKey!,
  };

  const handleSuccess = (reference: any) => {
    console.log("Payment successful", reference);
  };

  const handleClose = () => {
    console.log("Payment closed");
  };

  const componentProps = {
    ...config,
    text: "Pay Now",
    onSuccess: handleSuccess,
    onClose: handleClose,
  };

  return (
    <>
      {/* <button
        onClick={() =>
          initializePayment({
            onSuccess: (
              responses:
                | {
                    reference: string;
                    trans: string;
                    status: string;
                    message: string;
                    transaction: string;
                    trxref: string;
                    redirecturl: string;
                  }
                | Record<string, unknown>,
            ) => {
              console.log("Payment successful!", responses);
            },
            onClose: () => {
              console.log("Payment closed");
            },
          })
        }
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Pay ₦2,000
      </button> */}

      <Card shadow="xs" padding="lg" radius="md">
        <form>
          <Grid gutter="md">
            {/* <Grid.Col span={{ base: 12, md: 6 }}>
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
            </Grid.Col> */}
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
        {/* <PaystackButton {...componentProps} /> */}
      </Card>
    </>
  );
}
