import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/bootstrap.css";
import "../styles/animate.min.css";
import "../styles/helper.css";
import "../styles/unit-test.css";
import "../styles/main-style.css";
import "../styles/navbar.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IBW - IT Solutions",
  description: "Professional IT Solutions and Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark`}
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
