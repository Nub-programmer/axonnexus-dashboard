import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AxonNexus - AI API Platform",
  description: "Developer-focused AI API platform with simple, reliable access to AI models",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
