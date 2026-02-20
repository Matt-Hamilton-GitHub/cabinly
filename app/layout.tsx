import type { Metadata } from "next";
import { Geist, Geist_Mono, MuseoModerno, Space_Grotesk, Alumni_Sans_Pinstripe,Playfair_Display } from "next/font/google";

import "@/app/_styles/globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { UserProvider } from "./contexts/UserContext";
import ReactQueryProvider from "./lib/ReactQueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const museoModerno = MuseoModerno({ weight: "400", subsets: ["latin"] })
const alumniSansPri = Alumni_Sans_Pinstripe({ weight: "400",variable: "--alumni-sans-pinstripe"})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-space",
});

// const poppins = Poppins({weight: "400", subsets: ["latin"]});

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
      <head>
         <script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_GEO_API}&libraries=places`}
        async
        defer
      />
      </head>
      <body
        className={`
          ${playfair.variable}
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${spaceGrotesk.variable}
          ${alumniSansPri.variable}
          ${museoModerno.className} 
          antialiased
          min-h-screen
          text-green`}
      >
        <UserProvider>
          <div className="overflow-x-clip h-full overflow-auto">
            <Navbar />
            <main className="">
              <ReactQueryProvider>
              {children}
              </ReactQueryProvider>
            </main>
          </div>
           
        </UserProvider>
        <Footer />
      </body>
    </html>
  );
}
