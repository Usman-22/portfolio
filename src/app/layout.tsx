import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Usman - WordPress Developer | Remote Work Specialist",
  description:
    "Expert WordPress developer available for remote work. Specializing in custom themes, plugin development, WooCommerce, and Elementor. 3+ years experience with 100+ WordPress sites built.",
  keywords:
    "WordPress developer, remote WordPress developer, custom WordPress themes, plugin development, WooCommerce, Elementor, PHP developer, Muhammad Usman",
  authors: [{ name: "Muhammad Usman" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
