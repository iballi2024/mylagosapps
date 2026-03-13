import { Box, Button, MantineTheme, Text, Title } from "@mantine/core";
import { FaCheck, FaExclamation } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { useGlobal } from "../../context/global-store";
import { JSX, useState } from "react";
import Link from "next/link";

const Message = {
  Success: "SUCCESS",
  Failure: "FAILURE",
} as const;

// type MessageKey = keyof typeof Message;
// // "Admin" | "User"

type MessageValue = (typeof Message)[keyof typeof Message];
// "ADMIN" | "USER"

export default function PageResponseCard({
  title,
  message,
  messageType = "FAILURE",
  isCTA = true,
  ctaUrl = "/",
  isCtaIcon = true,
  ctaIcon = <IoHomeOutline size={16} />,
  isCTALink = true,
  ctaTitle = "Go Back to Home",
}: {
  title?: string;
  message?: string | JSX.Element;
  messageType?: MessageValue;
  isCTA?: boolean;
  ctaUrl?: string;
  isCtaIcon?: boolean;
  ctaIcon?: JSX.Element;
  isCTALink?: boolean;
  ctaTitle?: string;
}) {
  const { theme } = useGlobal();

  return (
    <>
      <Box w={"100%"}>
        <Box mb={30} display={"flex"} flex={"center"}>
          <Box w={70} mx={"auto"} color="primary[6]">
            {Message.Failure === messageType ? (
              // <Box
              //   display={"flex"}
              //   flex={"center"}
              //   style={{
              //     borderColor: theme?.colors.red[6],
              //     borderWidth: 5,
              //     borderStyle: "solid",
              //     width: 80,
              //     height: 80,
              //     borderRadius: "50%",
              //     alignItems: "center",
              //     justifyContent: "center",
              //   }}
              // >
              //   <FaExclamation size={60} color={theme?.colors.red[6]} />
              // </Box>
              <IconWrapper colorClass={theme?.colors.red?.[6] ?? "#FF0000"}>
                <FaExclamation
                  size={60}
                  color={theme?.colors.red?.[6] ?? "#FF0000"}
                />
              </IconWrapper>
            ) : (
              // <Box
              //   display={"flex"}
              //   flex={"center"}
              //   style={{
              //     borderColor: theme?.colors.primary[6],
              //     borderWidth: 5,
              //     borderStyle: "solid",
              //     width: 80,
              //     height: 80,
              //     borderRadius: "50%",
              //     alignItems: "center",
              //     justifyContent: "center",
              //   }}
              // >
              //   <FaCheck size={60} color={theme?.colors.primary[6]} />
              // </Box>

              // "var(--color-primary-6)"
              <IconWrapper colorClass={theme?.colors.primary?.[6] ?? "#0FA958"}>
                <FaCheck
                  size={60}
                  color={theme?.colors.primary?.[6] ?? "#0FA958"}
                />
              </IconWrapper>
            )}
          </Box>
        </Box>
        {/* Title */}
        <Title
          ta={"center"}
          fz={30}
          mb={10}
          style={{
            color:
              Message.Failure === messageType
                ? (theme?.colors.red?.[6] ?? "#FF0000")
                : (theme?.colors.primary?.[6] ?? "#0FA958"),
          }}
        >
          {title}
        </Title>

        {/* Body */}
        <Box c={"#1E1E1E"} ta={"center"} mb={20}>
          {typeof message === "string" ? (
            <Text ta={"center"} mb={20}>
              {message}
            </Text>
          ) : (
            message
          )}
        </Box>

        {/* CTA */}
        {isCTA &&
          (isCTALink ? (
            <Button
              component={Link}
              href={ctaUrl as string}
              size="lg"
              color="primary"
              radius={"lg"}
              variant={"outline"}
              fullWidth={true}
            >
              <Box component="span" display={"flex"} className="gap-2">
                {ctaTitle}
                {isCtaIcon && ctaIcon}
              </Box>
            </Button>
          ) : (
            <Button
              onClick={() => {
                window.location.href = ctaUrl;
              }}
              size="lg"
              color="primary"
              radius={"lg"}
              variant={"outline"}
              fullWidth={true}
            >
              <Box component="span" display={"flex"} className="gap-2">
                {ctaTitle}
                {isCtaIcon && ctaIcon}
              </Box>
            </Button>
          ))}
      </Box>
    </>
  );
}

function IconWrapper({
  children,
  colorClass,
}: {
  children: JSX.Element;
  colorClass: string;
}) {
  return (
    <Box
      display={"flex"}
      flex={"center"}
      style={{
        borderColor: colorClass,
        borderWidth: 5,
        borderStyle: "solid",
        width: 80,
        height: 80,
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
}
