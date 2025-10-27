"use client";
import "../styles/globals.css";
import Header from "../components/Header/Header";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const esconderHeader = ["/cadastro", "/login"];
  const mostrarHeader = !esconderHeader.includes(pathname);

  return (
    <html lang="pt-br">
      <body>
        {mostrarHeader && <Header />}
        {children}
      </body>
    </html>
  );
}
