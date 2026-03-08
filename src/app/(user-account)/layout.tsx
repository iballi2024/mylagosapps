import Toolbar from "../shared/components/Toolbar/Index";

export default function UserAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* UserAccountLayout */}
      <Toolbar />
      {children}
    </>
  );
}
