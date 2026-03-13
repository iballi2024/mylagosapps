import type { Metadata } from "next";
import {
  // Geist,
  Geist_Mono,
  Inter,
  Montserrat,
  Poppins,
} from "next/font/google";
import "./globals.css";
import { Box, createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./sass/main.scss";
import { theme } from "./theming/mantine-theming";
import "@mantine/core/styles.css";
// ‼️ import carousel styles after core package styles
import "@mantine/carousel/styles.css";
import { GlobalStoreProvider } from "./context/global-store/global.store";
import Script from "next/script";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { log } from "console";
import ErrorBoundary from "./common/ErrorBoundary";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistPoppins = Poppins({
  weight: ["400", "700"],
  variable: "--font-geist-poppins",
  subsets: ["latin"],
});

const geistInter = Inter({
  weight: ["400", "700"],
  variable: "--font-geist-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Lagos App",
  description: "My Lagos App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistPoppins.variable} ${geistInter.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <ToastContainer draggable transition={Bounce} />
          <MantineProvider theme={theme} defaultColorScheme="auto">
            <GlobalStoreProvider>
                {children}
            </GlobalStoreProvider>
          </MantineProvider>
        </ErrorBoundary>

        {/* <Script
          src="https://js.paystack.co/v1/inline.js"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
