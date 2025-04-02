import { Elsie } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const elsie = Elsie({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Blog || Explore With US",
  description: "Blog website using Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png"></link>
        <meta name="google-adsense-account" content="ca-pub-9806227082924592"></meta>
      </head>
      <body className={elsie.className}>
        <div className="min-h-[95vh]">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
