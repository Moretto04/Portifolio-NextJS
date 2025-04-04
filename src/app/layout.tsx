import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/_components/ui/Header";
import { Footer } from "@/_components/ui/Footer";

const PoppinsFont = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--type-poppins-regular'
});

export const metadata: Metadata = {
  title: "Olavo Moretto",
  description: "Desenvolvedor Front-End ReactJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/icon/FaviIcon.png" type="image/png" />
      </head>
      <body className={PoppinsFont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
