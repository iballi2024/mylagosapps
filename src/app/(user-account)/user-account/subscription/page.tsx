import SubscriptionPlans from "@/src/app/shared/contents/SubscriptionPlans/Index";
import { Space } from "@mantine/core";

export default function Subscription() {
  return (
    <>
      <div className="pt-20">
        <section>
          <div className="main-wrapper">
            <Space h={100} />
            <SubscriptionPlans
              title="Power Your Lifestyle with the Right Plan"
              titleOrder={1}
            />

            {/* Subscriptions
            <hr />
            <div className="min-h-screen bg-red-200">Subscription</div>
            <div className="min-h-screen bg-blue-200"></div> */}
          </div>
        </section>
      </div>
    </>
  );
}
