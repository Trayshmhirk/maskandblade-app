import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Mask and Blade",
  description: "Precision Cuts, Unmasked Style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-inter ${bebasNeue.variable} font-bebas-neue`}
    >
      <body className="font-sans">
        <Suspense>
          <Toaster richColors position="top-right" />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
