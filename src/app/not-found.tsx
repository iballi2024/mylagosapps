import { Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Text fz={"xl"} fw={"bold"} ta={'center'}>
        Oops! This page you are looking for does not exist!
      </Text>

      <Text>
        Go back to{" "}
        <Link
          href="/"
          style={{
            color: "green",
          }}
        >
          Home
        </Link>
      </Text>
    </div>
  );
}
