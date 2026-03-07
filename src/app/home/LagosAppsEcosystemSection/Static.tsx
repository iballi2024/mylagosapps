import { Image } from "@mantine/core";
import PrimaryBtn from "../../shared/components/buttons/PrimaryBtn";

export default function Static() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <div className="main-wrapper grid grid-cols-12 gap-y-12 md:gap-6">
          <div className="col-span-12 md:col-span-7">
            <h2 className="ff-heading text-2xl md:text-6xl font-semibold mb-5">
              Meet the LagosApps Ecosystem
            </h2>
            <p className="text-lg max-w-175 md:leading-8.5">
              LagosApps brings together the services Lagosians use every day
              into one connected ecosystem designed for real life in Lagos.
              Whether you’re ordering hot meals through Mainlandmeals, booking
              reliable transport with Vanlagos, powering your home or office via
              Mainlandsolar, or shopping fresh groceries from Lagoscarts,
              LagosApps simplifies your day. From Island to Mainland, we help
              you move, eat, shop, and live smarter — all from one trusted
              network.
            </p>
            <div className="my-6 md:my-10"></div>

            <PrimaryBtn
              title="Download the App"
              handleEvent={() => alert("Download the App")}
              size="xl"
            />
          </div>
          <div className="col-span-12 md:col-span-5 xbg-red-400 order-1 md:order-2">
            <ul className="flex flex-col gap-y-6">
              <li className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-16 min-w-16 max-w-16 p-4 bg-white shadow rounded-lg">
                  <Image
                    src="/assets/icons/icon-everyday-convinience.svg"
                    alt="Everyday convenience"
                    width={25}
                    height={25}
                    className="w-full"
                  />
                </div>
                <div>
                  <h3 className="ff-heading text-2xl font-extrabold mb-2">
                    Everyday Convenience
                  </h3>
                  <p className="text-lg">
                    Order food, shop groceries, hire a van, or get solar
                    solutions without switching platforms. We bring essential
                    services together so you can get more done with less stress.
                  </p>
                </div>
              </li>
              <li className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-16 min-w-16 max-w-16 p-4 bg-white shadow rounded-lg">
                  <Image
                    src="/assets/icons/icon-reliable-local-solutions.svg"
                    alt="Everyday convenience"
                    width={25}
                    height={25}
                    className="w-full"
                  />
                </div>
                <div>
                  <h3 className="ff-heading text-2xl font-extrabold mb-2">
                    Reliable Local Solutions
                  </h3>
                  <p className="text-lg">
                    Built specifically for the Lagos environment, our services
                    understand traffic, power needs, neighborhood logistics, and
                    real-time delivery challenges — so you don’t have to.
                  </p>
                </div>
              </li>
              <li className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-16 min-w-16 max-w-16 p-4 bg-white shadow rounded-lg">
                  <Image
                    src="/assets/icons/icon-service-that-makes-sense.svg"
                    alt="Everyday convenience"
                    width={25}
                    height={25}
                    className="w-full"
                  />
                </div>
                <div>
                  <h3 className="ff-heading text-2xl font-extrabold mb-2">
                    Value That Makes Sense
                  </h3>
                  <p className="text-lg">
                    Transparent pricing, trusted vendors, and dependable service
                    ensure you get quality and affordability every time you use
                    LagosApps.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
