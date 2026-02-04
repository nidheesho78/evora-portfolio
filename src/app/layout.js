// import localFont from "next/font/local";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { icons } from "lucide-react";
// import ScrollToTop from "@/components/ScrollToTop";


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "Evora Future Technical Services | Interior Fit-out & Maintenance UAE",
//   description:
//     "Premium interior fit-out and maintenance company in UAE. Specializing in residential, commercial, retail & corporate projects since 2019.",
//   keywords:
//     "interior design UAE, fit-out Dubai, commercial interiors, residential design, maintenance services",
// };
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navbar />
//         {children}
//         <Footer />
//         {/* Floating scroll button - appears on all pages */}
//         <ScrollToTop />
//       </body>
//     </html>
//   );
// }


// Because <Toaster /> is a client component (uses portals + React DOM)

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast"; // ← Import here

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
  title: "Evora Future Technical Services | Interior Fit-out & Maintenance UAE",
  description:
    "Premium interior fit-out and maintenance company in UAE. Specializing in residential, commercial, retail & corporate projects since 2019.",
  keywords:
    "interior design UAE, fit-out Dubai, commercial interiors, residential design, maintenance services",
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
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
