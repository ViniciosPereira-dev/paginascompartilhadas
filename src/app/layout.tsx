"use client"
import "../styles/globals.css";
import Header from "../components/Header/Header";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const mostrarHeader = pathname !== "/cadastro";

  return (
    <html lang="pt-br">
      <body>
        {mostrarHeader && <Header />}
        {children}
      </body>
    </html>
  );
}
