// src/app/layout.tsx
import type { Metadata } from "next";
import ThemeProvider from "../theme/theme-provider";
import ThemeToggle from "../theme/theme-toggle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";




export const metadata: Metadata = {
  title: "ScholarPath",
  description: "Scholarship consulting made easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#ffffffcf]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
