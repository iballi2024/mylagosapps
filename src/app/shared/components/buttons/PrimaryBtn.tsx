import { Button } from "@mantine/core";

// export default function PrimaryBtn({ children }: { children: React.ReactNode }) {
export default function PrimaryBtn({ title, handleEvent, size="md" }: { title: string, handleEvent?: () => void, size?: string }) {
  return (
    <>
        <Button color="primary" variant="filled" size={size} onClick={handleEvent}>
          {title}
        </Button>
    </>
  );
}
