import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const poppis_init = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "600"],
});

export const nunito_sans_init = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
  weight: ["300", "600"],
});

export const metadata = {
  title: "NAPPMIS",
  description:
    "NATIONAL AGRICULTURAL PROJECTS & PROGRAMMES MANAGEMENT INFORMATION SYSTEM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppis_init.variable} ${nunito_sans_init.variable}`}>
        <Header />
        <main className="poppins">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
