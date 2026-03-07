import { Card, Image, Text, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function AuthCard({
  title,
  tagline,
  children,
}: {
  title: string;
  tagline?: React.ReactNode | string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Card w={"100%"} bdrs={10} maw={600} p={{ lg: 50 }} className="shadow-sm">
        <div className="max-w-16">
          <Image src="/favicon.svg" width={53} height={50} alt="Logo" />
        </div>
        <Title order={1} fw={400} fz={25}>
          {title}
        </Title>
        {
            tagline && (
                <Text>
                    {tagline}
                </Text>
            )
        }
        {children}
      </Card>
    </>
  );
}
