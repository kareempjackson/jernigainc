import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Primary. Titles, quotes, big numbers.
const hedvig = localFont({
  src: "../public/fonts/Hedvig_Letters_Serif/HedvigLettersSerif-Regular-VariableFont_opsz.ttf",
  variable: "--font-hedvig",
  weight: "400",
  display: "swap",
});

// Secondary. Body, UI, eyebrows, buttons.
const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jernigan & Associates",
  description:
    "Psychological and educational consulting since 2008. Research led, culturally embedded work, built with your people.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hedvig.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
