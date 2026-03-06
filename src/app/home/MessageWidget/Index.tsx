"use client";

import { Box, Text, Textarea, TextInput, Button, Grid } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FaEnvelope } from "react-icons/fa6";

export default function MessageWidget() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <>
      <Box
        ta="center"
        bdrs={{ base: "lg", md: "xl" }}
        p={{ base: 20, md: 40 }}
        style={{
          // backgroundColor: "#222938"
          backgroundColor: "rgba(500, 500, 500, 0.1)",
        }}
      >
        <FaEnvelope size={45} className="mx-auto mb-4" />
        <Text fz={25}>Send Us a Message</Text>

        <Box
          mt={40}
          component="form"
          onSubmit={form.onSubmit((values) => console.log(values))}
          ta={"left"}
        >
          <Grid>
            <Grid.Col span={12}>
              <TextInput label="Your Email" placeholder="Enter your email" />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput label="Subject" placeholder="Enter subject" />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Message"
                placeholder="Write your message..."
                rows={4}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Button
                variant="outline"
                type="submit"
                color="primary"
                size="lg"
                px={40}
                fullWidth
              >
                Send
              </Button>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
