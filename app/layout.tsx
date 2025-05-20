import type { Metadata } from "next";
import { Geist, Geist_Mono, MuseoModerno, Space_Grotesk, Alumni_Sans_Pinstripe } from "next/font/google";
import "@/app/_styles/globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { UserProvider } from "./contexts/UserContext";

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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"]
})

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
      <body
        className={`
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
          <div className="">
            <Navbar />
            <main className="">
              {children}
            </main>
          </div>
           
        </UserProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
