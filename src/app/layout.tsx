import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header/Header";
import { CustomThemeProvider } from "@/providers/theme/CustomTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Management Software",
  description:
    "Manage all aspects of your educational institution with ease. Our school management software simplifies administrative tasks, class scheduling, attendance tracking, assignment management, grading, and communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CustomThemeProvider>
      <html lang="en">
        <body className={`${inter.className} flex flex-col h-screen`}>
          <Header />
          <main className="overflow-auto">{children}</main>
        </body>
      </html>
    </CustomThemeProvider>
  );
}
