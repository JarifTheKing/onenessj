import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/layout/Navbar";
import Footer from "@/components/shared/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Oneness | Empower Change with Radical Trust",
  description:
    "Oneness connects you directly to verified global projects. Track every single donation and witness measurable impact in real-time.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white selection:bg-indigo-500/20 selection:text-indigo-500">
        {/* Persisted Global Navbar */}
        <Navbar />

        {/* Dynamic Page Target Content */}
        <main className="flex-grow">{children}</main>

        {/* Persisted Global Footer placeholder */}
        <Footer />
      </body>
    </html>
  );
}
