import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { WithAuth } from "@/hocs/WithAuth";
import { AuthProvider } from "@/providers/AuthProvider";
import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Assets",
  description: "Open Assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <Script
        src="https://accounts.google.com/gsi/client?hl=ja"
        strategy="beforeInteractive"
        async
        defer
        id="script_google"
      /> */}
      <body className={inter.className}>
        <main>
          <ReactQueryProvider>
            <WithAuth>
              <AuthProvider>{children}</AuthProvider>
            </WithAuth>
          </ReactQueryProvider>
        </main>
      </body>
    </html>
  );
}
