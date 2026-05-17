"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import HeaderNew from "./home_1/Header";
import Carousel from "./home_1/Carousel";
import Lenis from "lenis";
import FooterNew from "../components/module/Footer";
import ReduxProvider
  from "@/store/provider";

import "font-awesome/css/font-awesome.min.css";
import "./globals.css";
import "../styles/globals.css";
import "../styles/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showButton, setShowButton] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      gestureOrientation: "vertical",
    });


    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ({ scroll }) => {
      if (pathname !== "/") {
        setShowButton(scroll > 300);
      }
    });

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [pathname]);

  const scrollToTop = () => {
    lenisRef.current?.scrollTo(0, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <div id="lenis-root">
            <HeaderNew />
            {pathname === "/" && (
              <Carousel
                setShowButton={setShowButton}
                lenisRef={lenisRef}
              />
            )}
            <main>{children}</main>
            <div><FooterNew /></div>
          </div>
          <button
            className={`scrollToTop ${showButton ? "show" : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </ReduxProvider>
      </body>
    </html>
  );
}