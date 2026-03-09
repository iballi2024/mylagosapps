import { Title, TitleProps } from "@mantine/core";

interface SectionTitleProps extends TitleProps {
  title: string;
  fontSize?:
    | number
    | string
    | {
        base?: number;
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
      };
  textAlign?: "left" | "center" | "right";
  order?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function SectionTitle({
  title,
  textAlign,
  order = 1,
  fontSize = { base: 35, xs: 45 },
  ...props
}: SectionTitleProps) {
  return (
    <>
      <Title
        order={order}
        mx={"auto"}
        ta={textAlign}
        fz={fontSize}
        {...props}
        // className="max-w-200 mx-auto | ff-heading text-2xl md:text-3xl xl:text-5xl font-bold text-center mb-10 | after:content-[''] after:block after:w-75 after:mx-auto after:h-16 after:bg-[url('/assets/images/title-underline-waves.svg')] after:bg-no-repeat after:bg-center"
        className="max-w-200 | after:content-[''] after:block after:w-75 after:mx-auto after:h-16 after:bg-[url('/assets/images/title-underline-waves.svg')] after:bg-no-repeat after:bg-center"
      >
        {title}
      </Title>
    </>
  );
}
