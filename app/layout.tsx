import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

//* Fonts declaration
const geistSans = Geist({
  variable: "--font-geist-sans", // var for styles to use
  subsets: ["latin"], // loads only latin symbols to lightweight the font
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//* SEO Meta data (to use specifically for a page import type Metadata required)
export const metadata: Metadata = {
  title: "Main Page",
  description: "This is Main Page SEO description for search engines",
};

//* Root layout to wrap all the pages and components
//? Use individual layouts if a page needs different view, sidebars, alternative admin view
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header />

          <main>{children}</main>

          <footer>
            <p>
              Created <time dateTime="2025">2025</time>
            </p>
          </footer>
        </TanStackProvider>
      </body>
    </html>
  );
}
