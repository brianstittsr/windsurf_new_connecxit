import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import Navigation from "@/components/Navigation";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ConnecXit - Find Event Planners",
  description: "Find and connect with the best event planners in your area",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
