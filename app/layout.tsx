import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arctan Power - Securing & Optimizing Critical Energy Infrastructure",
  description: "AI-powered grid intelligence with quantum-grade security for modern utilities and power systems",
  icons: {
    icon: "/artanpower/icon.png",
  },
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
