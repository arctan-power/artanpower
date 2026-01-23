import type { Metadata } from "next";
import "./globals.css";

// Custom domain configured - no basePath needed
const BASE_PATH = '';

export const metadata: Metadata = {
  title: "Arctan Power - Securing & Optimizing Critical Energy Infrastructure",
  description: "AI-powered grid intelligence with quantum-grade security for modern utilities and power systems",
  icons: {
    icon: `${BASE_PATH}/icon.png`,
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
