import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

//* Fonts declaration
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

//* SEO Meta data (to use specifically for a page import type Metadata required)
export const metadata: Metadata = {
  title: "Main Page",
  description: "This is Main Page SEO description for search engines",
};

//* Root layout to wrap all the pages and components
export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <TanStackProvider>
          <Header />

          <main>
            {children}
            {modal}
          </main>

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
