import { Card, Image, Text, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";
// import { IoIosArrowBack } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";

export default function AuthCard({
  title,
  titleAlign = "left",
  tagline,
  taglineAlign = "left",
  footAlign = "left",
  isBackHistory = false,
  foot,
  children,
}: {
  title?: string;
  titleAlign?: "left" | "center" | "right";
  tagline?: React.ReactNode | string;
  foot?: React.ReactNode | string;
  taglineAlign?: "left" | "center" | "right";
  footAlign?: "left" | "center" | "right";
  isBackHistory?: boolean;
  children: React.ReactNode;
}) {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <Card w={"100%"} bdrs={10} maw={600} p={{ lg: 50 }} className="shadow-sm">
        <div className="max-w-16">
          <Image src="/favicon.svg" width={53} height={50} alt="Logo" />
        </div>
        <div className="flex items-center gap-2">
          {isBackHistory && (
            <button
              aria-label="go back"
              onClick={goBack}
              className="cursor-pointer"
            >
              <IoMdArrowBack size={20} />
            </button>
          )}
          <Title order={1} fw={400} fz={25} ta={titleAlign} className="w-full">
            {title}
          </Title>
        </div>
        {tagline && tagline instanceof String ? (
          <Text c={"#6B7280"} mt={5} ta={taglineAlign}>
            {tagline}
          </Text>
        ) : tagline}
        {children}
        {foot && foot instanceof String ? (
          <Text c={"#6B7280"} mt={5} ta={footAlign}>
            {foot}
          </Text>
        ) : foot}
      </Card>
    </>
  );
}
