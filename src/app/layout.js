import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { Analytics } from "@vercel/analytics/react"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Info PR Bangladesh",
    template: "%s | Info PR Bangladesh",
  },
  description: "Your trusted corporate public relations and media partner in Bangladesh.",
  icons: {
    icon: '/logo.jpeg', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-rose-500 selection:text-white">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>

        <Analytics />
      </body>
    </html>
  );
}