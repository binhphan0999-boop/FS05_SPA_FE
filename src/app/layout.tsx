"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
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
            className={`chatFloatingBtn ${showButton ? "show" : ""}`}
            onClick={() => router.push("/chat")}
            aria-label="Chat with AI"
          >
            <i className="fa fa-commenting-o" aria-hidden="true"></i>
            <span className="tooltip">AI Consultant</span>
          </button>
          <button
            className={`scrollToTop ${showButton ? "show" : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </ReduxProvider>
        <style jsx global>{`
          .chatFloatingBtn {
            position: fixed;
            right: 20px;
            bottom: 90px; /* Nằm trên nút scroll to top */
            width: 55px;
            height: 55px;
            background: linear-gradient(135deg, #d4af37 0%, #f3d57d 100%);
            color: #111;
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            cursor: pointer;
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .chatFloatingBtn.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .chatFloatingBtn:not(.show) {
            transform: translateY(20px);
          }

          .chatFloatingBtn:hover {
            transform: scale(1.1) translateY(-5px);
            box-shadow: 0 8px 25px rgba(212, 175, 55, 0.6);
            background: linear-gradient(135deg, #f3d57d 0%, #d4af37 100%);
          }

          .chatFloatingBtn .tooltip {
            position: absolute;
            right: 70px;
            background: rgba(0, 0, 0, 0.8);
            color: #d4af37;
            padding: 8px 15px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s;
            border: 1px solid #d4af37;
          }

          .chatFloatingBtn:hover .tooltip {
            opacity: 1;
          }

          /* Tùy chỉnh nút scroll to top cũ để trông đồng bộ hơn nếu cần */
          .scrollToTop {
            position: fixed;
            right: 20px;
            bottom: 20px;
            width: 55px;
            height: 55px;
            background: #111;
            color: #d4af37;
            border: 1px solid #d4af37;
            border-radius: 50%;
            z-index: 999;
            transition: all 0.3s ease;
            opacity: 0;
            visibility: hidden;
          }
          .scrollToTop.show {
            opacity: 1;
            visibility: visible;
          }
          .scrollToTop:hover {
            background: #d4af37;
            color: #111;
          }
        `}</style>
      </body>
    </html>
  );
}