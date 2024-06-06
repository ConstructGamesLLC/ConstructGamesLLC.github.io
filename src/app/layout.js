import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Construct Games",
  description: "Construct Games is a board game company based in the United States. We create party games that are fun, funny, and easy to learn.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><meta name="google-site-verification" content="HALNtK855l4EGtZUDKBGqHUXqO7L2Dekq_ZkXqulxzQ" /></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
