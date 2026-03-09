import { Box, Card, Text, Title } from "@mantine/core";
import { FaSolarPanel, FaVanShuttle } from "react-icons/fa6";
import { useGlobal } from "../../context/global-store";
import IconProp from "./IconProp";

export default function ServiceCard({
  title,
  tagline,
  description,
  icon,
  cta,
}: any) {
  const { theme, colorScheme } = useGlobal();
  return (
    <>
      <Card bdrs={20} shadow="xs" padding={"xl"} ta={"center"} h={"100%"}>
        <Box
          component="div"
          mb={10}
          style={{
            color:
              colorScheme === "dark"
                ? theme?.colors.gray[6]
                : theme?.colors.gray[8],
          }}
        >
          <IconProp icon={icon} />
        </Box>

        <Title order={6} fz={18} mb={2}>
          {title}
        </Title>
        <Text fz={16} mb={10} fw={500}>
          {tagline}
        </Text>
        <Text fz={15}>{description}</Text>

        <Text
          component={"a"}
          href="#"
          target="_blank"
          rel="noopener"
          mt={20}
          fw={600}
          fz={15}
          c={colorScheme === "dark" ? `white` : theme?.colors.secondary[6]}
          className="no-underline! flex items-center justify-center text-primary-light! font-semibold transform transition-transform  duration-300 
               hover:translate-x-2 hover:scale-105"
        >
          {cta.title}
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Text>
      </Card>
    </>
  );
}
