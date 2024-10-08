import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const RobotoCondensed = localFont({
  src: "./fonts/RobotoCondensed-VariableFont_wght.ttf",
  variable: "--font-robo-cond",
  weight: "100 900",
});
const RobotoCondensedItalic = localFont({
  src: "./fonts/RobotoCondensed-Italic-VariableFont_wght.ttf",
  variable: "--font-robo-ital",
  weight: "100 900",
});
const Raleway = localFont({
  src: "./fonts/Raleway-Italic-VariableFont_wght.ttf",
  variable: "--font-raleway",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${RobotoCondensed.variable} ${RobotoCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
