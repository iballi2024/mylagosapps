import { Button, ButtonProps } from "@mantine/core";

interface PrimaryBtnProps extends ButtonProps {
  title: string;
  handleEvent?: () => void;
  size?: string;
  fullWidth?: boolean;
}

// export default function PrimaryBtn({ children }: { children: React.ReactNode }) {
export default function PrimaryBtn({
  title,
  handleEvent,
  size = "md",
  fullWidth = false,
  ...props
}: PrimaryBtnProps) {
  return (
    <>
      <Button
        color="primary"
        variant="filled"
        size={size}
        onClick={handleEvent}
        fullWidth={fullWidth}
        {...props}
      >
        {title}
      </Button>
    </>
  );
}
