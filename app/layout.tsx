import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ZaiKuu -- Campus Marketplace",
  description:
    "Connecting students with local vendors for fresh, affordable meals. Order food, track deliveries, and support campus vendors.",
  openGraph: {
    title: "ZaiKuu -- Campus Marketplace",
    description:
      "Connecting students with local vendors for fresh, affordable meals.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
