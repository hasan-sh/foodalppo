import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Foodalppo - Syrisch streetfood met liefde uit Aleppo",
  description: "Ontdek authentieke Midden-Oosterse streetfood zoals falafel, BBQ-gerechten en traditionele koekjes bij Foodalppo, een foodtruck met Syrische smaken.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>
        <header className="fixed w-full bg-orange-900/90 text-white z-50">
          <div className="container mx-auto px-4">
            <nav className="flex justify-between items-center py-4">
              <a href="#" className="text-2xl font-bold text-amber-50">Foodalppo</a>
              <div className="hidden md:flex space-x-8">
                <a href="#menu" className="hover:text-orange-300 transition duration-300">Menu</a>
                <a href="#location" className="hover:text-orange-300 transition duration-300">Locatie</a>
                <a href="#about" className="hover:text-orange-300 transition duration-300">Over ons</a>
                <a href="#contact" className="hover:text-orange-300 transition duration-300">Contact</a>
              </div>
              <button className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
