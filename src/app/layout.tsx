import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edu Library",
  description: "Get the latest information about the library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex min-h-screen flex-col'>
          <Navbar />
          <div className='h-full flex-grow'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
