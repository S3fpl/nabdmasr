import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsivNav from "@/components/Home/Navbar/ResponsivNav";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "NabdMasr",
  description: "A platform for blood donation in Egypt.",
  keywords: ["blood donation", "egypt", "nabdmasr", "donate blood"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-gray-950 antialiased relative overflow-hidden`}>
        {/* ✅ فقاعات متحركة في الخلفية لجميع الصفحات */}
        <div className=" fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute w-72 h-72 bg-red-500 opacity-40 blur-[100px] rounded-full top-10 left-10 animate-pulse"></div>
          <div className="absolute w-56 h-56 bg-red-600 opacity-35 blur-[90px] rounded-full top-32 right-10 animate-pulse delay-1000"></div>
          <div className="absolute w-96 h-96 bg-red-700 opacity-30 blur-[120px] rounded-full bottom-10 left-1/4 animate-pulse delay-2000"></div>
          <div className="absolute w-48 h-48 bg-red-400 opacity-40 blur-[80px] rounded-full bottom-32 right-1/4 animate-pulse delay-3000"></div>
          <div className="absolute w-64 h-64 bg-red-500 opacity-30 blur-[110px] rounded-full top-1/2 left-10 animate-pulse delay-1500"></div>
          <div className="absolute w-72 h-72 bg-red-700 opacity-25 blur-[130px] rounded-full top-16 right-1/3 animate-pulse delay-2500"></div>
          <div className="absolute w-80 h-80 bg-red-400 opacity-30 blur-[120px] rounded-full bottom-1/4 left-1/3 animate-pulse delay-3500"></div>
        </div>

        <ResponsivNav />
        {children}
      </body>
    </html>
  );
}
