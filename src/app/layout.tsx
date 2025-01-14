import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { Footer } from "@/components";
import ReduxProvider from "@/redux/Provider";
const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: "300",
  style: "italic"
});
export const metadata: Metadata = {
  title: "Toki Cinema",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
        <Header modelOpen={false}/>
        <div className="container mx-auto min-h-[100vh]">
          {children}
        </div>
        <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
