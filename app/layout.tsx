import "./globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Streaming App",
  description: "A simplified Netflix-style app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>My Streaming App</header>

        <main>{children}</main>

        <footer>© 2025</footer>
      </body>
    </html>
  );
}
