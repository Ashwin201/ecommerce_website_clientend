import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import ModeProvider from "../Providers/ModeProvider";
import Navbar from "..//components/Navbar/Navbar";
import AuthProvider from "../Providers/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "shopEase",
  description: "Shop Smart, Shop Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <AuthProvider>
          <ModeProvider>
            <Navbar />

            <div className="box dark:bg-black bg-[#f8f9fa] dark:text-gray-300 text-gray-900">
              <div className="mt-10 mb-24">{children}</div>
              <Footer />
            </div>
          </ModeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
