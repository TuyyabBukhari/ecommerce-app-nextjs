import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/header/Header";

const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Walk - Walk the Talk of Style",
  description:
    "Next Walk: Where Every Step Tells a Story, Developed By Musa Bukhari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="emerald">
      <Head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <body
        className={inter.className + ` max-h-screen max-w-screen bg-base-100`}
      >
        <div className="flex flex-col items-center justify-center gap-0 min-w-full min-h-full">
          <div className="max-h-full max-w-[90%] w-[90%]">
            <Header />
            <main className="p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
