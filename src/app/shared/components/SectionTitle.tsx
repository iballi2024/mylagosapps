import { Title } from "@mantine/core";

export default function SectionTitle({
  title,
  fontSize,
  order = 1,
}: {
  title: string;
  fontSize: number | string;
  order: 1 | 2 | 3 | 4 | 5 | 6;
}) {
  return (
    <>
      <Title
        order={order}
        mx={"auto"}
        fz={fontSize}
        className="max-w-200 mx-auto | ff-heading text-2xl md:text-3xl xl:text-5xl font-bold text-center mb-10 | after:content-[''] after:block after:w-75 after:mx-auto after:h-16 after:bg-[url('/assets/images/title-underline-waves.svg')] after:bg-no-repeat after:bg-center"
      >
        {title}
      </Title>
    </>
  );
}
