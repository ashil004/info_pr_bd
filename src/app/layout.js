import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { LanguageProvider } from "./context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Info PR",
  description: "Info PR Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
        <body className="min-h-full flex flex-col">
          <LanguageProvider>

             <Navbar></Navbar>
          <main>
            
            {children}
            
          </main>

          <Footer></Footer>
          
          </LanguageProvider>

          

        </body>
      
    </html>
  );
}
