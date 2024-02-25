import type { Metadata } from "next";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Next Walk - Sanity Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
