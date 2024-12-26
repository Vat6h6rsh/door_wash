import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Importing custom fonts with fallback
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// Adding better default metadata for the project
export const metadata: Metadata = {
  title: "Door Wash - Premium Laundry Service",
  description:
    "Experience premium laundry service at your doorstep. Clean, convenient, and affordable.",
  keywords: ["laundry", "premium service", "Door Wash", "laundry pickup"],
  authors: [{ name: "Door Wash Team" }],
  openGraph: {
    title: "Door Wash - Premium Laundry Service",
    description:
      "Experience premium laundry service at your doorstep. Clean, convenient, and affordable.",
    images: "/images/hero-image.jpg",
    url: "https://yourwebsite.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Door Wash - Premium Laundry Service",
    description:
      "Experience premium laundry service at your doorstep. Clean, convenient, and affordable.",
    images: "/images/hero-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>{/* Add additional global tags here if needed */}</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
