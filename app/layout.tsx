import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, MuseoModerno } from "next/font/google";
import "@/app/_styles/globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const museoModerno = MuseoModerno({weight: "400", subsets: ["latin"]})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Cabinly",
  description: "Rent your fevorite cabin in the most amazing places",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          
          ${museoModerno.className} 
          antialiased
          
           min-h-screen
          text-green`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
