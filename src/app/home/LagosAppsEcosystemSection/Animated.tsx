"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import PrimaryBtn from "../../shared/components/buttons/PrimaryBtn";

export default function EcosystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    const animatedEls =
      sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animatedEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "/assets/icons/icon-everyday-convinience.svg",
      title: "Everyday Convenience",
      desc: "Order food, shop groceries, hire a van, or get solar solutions without switching platforms. We bring essential services together so you can get more done with less stress.",
    },
    {
      icon: "/assets/icons/icon-reliable-local-solutions.svg",
      title: "Reliable Local Solutions",
      desc: "Built specifically for the Lagos environment, our services understand traffic, power needs, neighborhood logistics, and real-time delivery challenges — so you don't have to.",
    },
    {
      icon: "/assets/icons/icon-service-that-makes-sense.svg",
      title: "Value That Makes Sense",
      desc: "Transparent pricing, trusted vendors, and dependable service ensure you get quality and affordability every time you use LagosApps.",
    },
  ];

  return (
    <>
      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .animate-on-scroll.slide-left {
          transform: translateX(-32px);
        }
        .animate-on-scroll.is-visible {
          opacity: 1;
          transform: translate(0, 0);
        }
        .feature-icon-wrap {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease;
        }
        .feature-item:hover .feature-icon-wrap {
          transform: scale(1.12) rotate(-4deg);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }
      `}</style>

      <section className="py-16 lg:py-24" ref={sectionRef}>
        <div className="main-wrapper grid grid-cols-12 gap-y-12 md:gap-6">
          {/* Left column */}
          <div className="col-span-12 md:col-span-7">
            <h2
              className="animate-on-scroll slide-left ff-heading text-2xl md:text-6xl font-semibold mb-5"
              style={{ transitionDelay: "0ms" }}
            >
              Meet the LagosApps Ecosystem
            </h2>
            <p
              className="animate-on-scroll slide-left text-lg max-w-175 md:leading-8.5"
              style={{ transitionDelay: "100ms" }}
            >
              LagosApps brings together the services Lagosians use every day
              into one connected ecosystem designed for real life in Lagos.
              Whether you&lsquo;re ordering hot meals through Mainlandmeals, booking
              reliable transport with Vanlagos, powering your home or office via
              Mainlandsolar, or shopping fresh groceries from Lagoscarts,
              LagosApps simplifies your day. From Island to Mainland, we help
              you move, eat, shop, and live smarter — all from one trusted
              network.
            </p>
            <div className="my-6 md:my-10" />
            <div
              className="animate-on-scroll slide-left"
              style={{ transitionDelay: "200ms" }}
            >
              <PrimaryBtn
                title="Download the App"
                handleEvent={() => alert("Download the App")}
                size="xl"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="col-span-12 md:col-span-5 order-1 md:order-2">
            <ul className="flex flex-col gap-y-6">
              {features.map((f, i) => (
                <li
                  key={f.title}
                  className="animate-on-scroll feature-item flex flex-col md:flex-row md:items-start gap-4"
                  style={{ transitionDelay: `${i * 120 + 150}ms` }}
                >
                  <div className="feature-icon-wrap w-16 min-w-16 max-w-16 p-4 bg-white shadow rounded-lg">
                    <Image
                      src={f.icon}
                      alt={f.title}
                      width={25}
                      height={25}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h3 className="ff-heading text-2xl font-extrabold mb-2">
                      {f.title}
                    </h3>
                    <p className="text-lg">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
