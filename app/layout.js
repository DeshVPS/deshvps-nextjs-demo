import "./globals.css";
import Link from "next/link";

export const metadata = { title: "Cha Ghor Journal", description: "Stories about tea from Dhaka" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bar">
          <Link href="/" className="logo">☕ Cha Ghor Journal</Link>
          <nav><Link href="/">Stories</Link><Link href="/about">About</Link></nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
