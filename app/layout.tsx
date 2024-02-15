import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleCaptchaWrapper from "./GoogleCaptchaWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "salvatoreviscuso.dev",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
