import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIdeation YT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        {/* Outras meta tags, links ou scripts podem ser adicionados aqui */}
      </head>
        <Provider>
          <body className={inter.className}>{children}</body>
        </Provider>
      </html>
    </ClerkProvider>
  );
}
