import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { CalculatorContextProvider } from "@/components/providers/CalculatorProvider";

const font = Manrope({subsets: ['greek']})

export const metadata: Metadata = {
  title: "PlayersOnly | NIL Valuation Calculator",
  description: "Created by interns a part of Ladder Summer '25 cohort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
      >
        <CalculatorContextProvider>
          {children}
        </CalculatorContextProvider>
      </body>
    </html>
  );
}
