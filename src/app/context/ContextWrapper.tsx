import { AuthStoreProvider } from "./auth-store/auth.store";
import { GlobalStoreProvider } from "./global-store/global.store";

export default function ContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalStoreProvider>
        <AuthStoreProvider>{children}</AuthStoreProvider>
      </GlobalStoreProvider>
    </>
  );
}
