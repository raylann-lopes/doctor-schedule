import "./globals.css";

import { Metadata } from "next";

import { Toaster } from "@/components/ui/sonner";
import { ReactQueryProvider } from "@/providers/react-query";

export const metadata: Metadata = {
  title: "Create Next APP",
  description: "An example application using Next.js with Better Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Toaster position="bottom-center" theme="light" />
      </body>
    </html>
  );
}
