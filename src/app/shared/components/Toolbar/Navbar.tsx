"use client";
import {
  Image,
  MantineProvider,
  useComputedColorScheme,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Button } from "@mantine/core";
import { primaryButtonTheme } from '../../../theming/mantine-theming/buttons';
import PrimaryBtn from '../buttons/PrimaryBtn';

export default function Navbar() {
  const theme = useMantineTheme();

  
  const [scrolled, setScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  // -> colorScheme is 'auto' | 'light' | 'dark'
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  // -> computedColorScheme is 'light' | 'dark', argument is the default value
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };
  const _toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   console.log({scrolled});
  //   if (scrolled) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [scrolled]);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return null;






  return (
    <nav
      // className="shadow fixed w-full top-0 bg-transparent"
      className={ scrolled ? `shadow fixed w-full top-0 bg-white z-99` : `shadow-none fixed w-full top-0 bg-transparent` }
      // className={ scrolled ? "shadow fixed w-full top-0 bg-white" : "shadow-none fixed w-full top-0 bg-transparent" }
      style={{
        // backgroundColor: isDark ? theme.colors.dark[7] : theme.white,
        backgroundColor: isDark ? theme.colors.dark[7] : (scrolled ? "#FFFFFF" : "transparent"),
      }}
    >
      {/* <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="main-wrapper">
        <div className="flex items-center justify-between h-16 lg:h-20 relative text-sm">
          {/* Left: Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-green-600 block max-w-50 lg:max-w-62.5"
            >
              {/* LagosApp */}
              {isDark ? (
                <>
                  <Image
                    src="/assets/images/brand-logo-dark.png"
                    width={3260}
                    height={460}
                    alt="Logo"
                  />
                  {/* <Image
                    src="/assets/images/brand-logo-dark.svg"
                    width={3260}
                    height={460}
                    alt="LagosApps"
                  /> */}
                </>
              ) : (
                <>
                  <Image
                    src="/assets/images/brand-logo-light.png"
                    width={3260}
                    height={460}
                    alt="Logo"
                  />
                  {/* <Image
                    src="/assets/images/brand-logo-light.svg"
                    width={3260}
                    height={460}
                    alt="LagosApps"
                  /> */}
                </>
              )}
            </Link>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex space-x-8 absolute left-1/2 -translate-x-1/2">
            <Link
              href="#"
              className="text-[#A6A6A6] hover:text-green-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-[#A6A6A6] hover:text-green-600 font-medium"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-[#A6A6A6] hover:text-green-600 font-medium"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-[#A6A6A6] hover:text-green-600 font-medium"
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="text-[#A6A6A6] hover:text-green-600 font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Right: Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#"
              className="text-[#A6A6A6] hover:text-green-600 font-medium"
            >
              Login
            </Link>
            {/* <Link
              href="#"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Get Started
            </Link> */}
            <PrimaryBtn title="Get Started" handleEvent={() => alert("Get Started")} />

            <button
              type="button"
              onClick={toggleColorScheme}
              className="cursor-pointer"
            >
              {colorScheme === "dark" ? (
                <FiSun size={20} />
              ) : (
                <FiMoon size={20} />
              )}
              <span className="sr-only">Toggle theme</span>
            </button>

            {/* {mounted && (
              <button
                type="button"
                onClick={_toggleColorScheme}
                className="cursor-pointer"
              >
                {colorScheme === "dark" ? (
                  <FiSun size={20} />
                ) : (
                  <FiMoon size={20} />
                )}
                <span className="sr-only">Toggle theme</span>
              </button>
            )} */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#A6A6A6] focus:outline-none"
            >
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>

            {mounted && (
              <button
                type="button"
                onClick={toggleColorScheme}
                className="cursor-pointer"
              >
                {colorScheme === "dark" ? (
                  <FiSun size={20} />
                ) : (
                  <FiMoon size={20} />
                )}
                <span className="sr-only">Toggle theme</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a
            href="#"
            className="block py-2 text-[#A6A6A6] hover:text-green-600"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 text-[#A6A6A6] hover:text-green-600"
          >
            About Us
          </a>
          <a
            href="#"
            className="block py-2 text-[#A6A6A6] hover:text-green-600"
          >
            Products
          </a>
          <a
            href="#"
            className="block py-2 text-[#A6A6A6] hover:text-green-600"
          >
            FAQ
          </a>
          <a
            href="#"
            className="block py-2 text-[#A6A6A6] hover:text-green-600"
          >
            Contact Us
          </a>

          <div className="border-t pt-3">
            <Link
              href="#"
              className="block py-2 text-[#A6A6A6] hover:text-green-600"
            >
              Login
            </Link>
            {/* <Link
              href="#"
              className="block mt-2 bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-700"
            >
              Download app
            </Link> */}
            <Button color="primary" fullWidth variant="filled">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
