import { ProtectedRoute } from "../common/ProtectedRoute";
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
      <ProtectedRoute>{children}</ProtectedRoute>
    </>
  );
}
