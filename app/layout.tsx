import "./globals.css";
import Navbar from "./components/Navbar";
import { Geist, Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });


export const metadata = {
  title: "Amol Kadam | Software Engineer",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} bg-black text-white`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}