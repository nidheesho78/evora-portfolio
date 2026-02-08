

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast"; // ← Import here
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "Evora Future | Interior Fit Out & Maintenance Company in Dubai, UAE",
  description:
    "Evora Future Technical Services LLC – Expert interior fit-out and maintenance in Dubai & UAE since 2019. Concept to completion: residential, commercial, retail & corporate projects with civil works, MEP, joinery, painting & more. Transparent, on-time, high-quality solutions.",
  keywords: [
    "interior fit out Dubai",
    "interior fit out company UAE",
    "fit out company Dubai",
    "interior fit out services Dubai",
    "commercial fit out UAE",
    "residential interior Dubai",
    "office fit out Al Quoz",
    "MEP works Dubai",
    "joinery works UAE",
    "painting contractors Dubai",
    "annual maintenance contract UAE",
    "interior design and fit out Dubai",
    "turnkey fit out UAE",
    "restaurant fit out Dubai",
    "villa interior Fujairah",
  ],
  icons: {
    icon: "/favicon.ico", // Simplest – Next.js handles it
  },
  openGraph: {
    title: "Evora Future | Leading Interior Fit Out Company in Dubai, UAE",
    description:
      "Transform your space with Evora Future – 6+ years delivering high-quality interior fit-out, MEP, joinery, and maintenance services across residential, commercial, and corporate projects in Dubai and UAE.",
    // url: 'https://yourdomain.com', // replace with actual
    siteName: "Evora Future Technical Services LLC",
    locale: "en_AE",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {/* ← Put Toaster here – appears on top of everything */}
        <Toaster
          position="top-center" // or "top-right", "bottom-right", etc.
          toastOptions={{
            duration: 5000,
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
              maxWidth: "500px",
            },
            success: {
              style: {
                background: "#10b981", // green
                color: "white",
              },
              iconTheme: {
                primary: "white",
                secondary: "#10b981",
              },
            },
            error: {
              style: {
                background: "#ef4444", // red
                color: "white",
              },
            },
          }}
        />

        {children}
        {/* ← Add Analytics component here (best place: inside <body>, after main content) */}
        <Analytics />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
