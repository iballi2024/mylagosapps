import { lazy, Suspense } from "react";

const Content = lazy(() => import("./Content"),);

export default function ActivateAccount() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
    </>
  )
}
