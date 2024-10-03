import type { Metadata } from "next";
import "./globals.css";

// For Layout Components
import Navbar from "./layout/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Mundial FC Academy",
  description: "Ottawa Soccer Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}