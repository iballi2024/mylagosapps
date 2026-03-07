"use client";
import Link from "next/link";
import AuthCard from "../components/AuthCard";
import { Grid, Space, Text, TextInput } from "@mantine/core";
import PrimaryBtn from "@/src/app/shared/components/buttons/PrimaryBtn";

export default function SignUp() {
  return (
    <>
      <AuthCard
        title="Create an account"
        tagline={
          <>
            Already have an account? <Link href="/auth/login">Log in</Link>
          </>
        }
      >
        <div className="mt-6"></div>
        <form>
          <Grid>
            <Grid.Col span={12}>
              <TextInput label="Username" />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput type="email" label="Email address" />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                type="password"
                label="Password"
                // description="Your password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number."
              />
              {/* <Text component="small" fz={14}>
                Your password must be at least 8 characters long, contain at
                least one uppercase letter, one lowercase letter, and one
                number.
              </Text>
             */}
              <Space h={30} />
              <Text fz={14}>
                By creating an account, you agree to our{" "}
                <Link href="#" className="underline!">
                  Terms of use
                </Link>{" "}
                and <Link href="#">Privacy Policy</Link>
              </Text>
            </Grid.Col>
            <Grid.Col span={12}>
              <PrimaryBtn
                title="Create account"
                size="lg"
                fullWidth={true}
                className="mt-6"
              />
            </Grid.Col>
          </Grid>
        </form>
      </AuthCard>
    </>
  );
}
