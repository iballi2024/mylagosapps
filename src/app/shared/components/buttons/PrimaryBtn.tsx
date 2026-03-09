import { useGlobal } from "@/src/app/context/global-store";
import { Button, ButtonProps, Loader } from "@mantine/core";

interface PrimaryBtnProps extends ButtonProps {
  title: string;
  handleEvent?: () => void;
  size?: string;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  type?: "submit" | "button";
}

// export default function PrimaryBtn({ children }: { children: React.ReactNode }) {
export default function PrimaryBtn({
  title,
  handleEvent,
  size = "md",
  fullWidth = false,
  type = "button",
  loading = false,
  disabled = false,
  ...props
}: PrimaryBtnProps) {
  const { theme, colorScheme } = useGlobal();
  return (
    <>
      <Button
        type={type}
        color="primary"
        variant="filled"
        size={size}
        onClick={handleEvent}
        fullWidth={fullWidth}
        disabled={disabled}
        {...props}
      >
        {loading ? (
          <Loader
            size={20}
            color={colorScheme === "dark" ? "#fff" : theme?.colors.primary[3]}
          />
        ) : (
          title
        )}
      </Button>
    </>
  );
}
