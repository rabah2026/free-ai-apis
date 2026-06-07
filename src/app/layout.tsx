import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI API Starter — Free AI APIs Explained for Beginners",
  description: "Find official AI APIs with free tiers, free credits, clear docs, starter examples, and beginner-friendly explanations.",
  metadataBase: new URL("https://ai-api-starter.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
