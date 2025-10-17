"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Briefcase, Calendar, HelpCircle } from "lucide-react";
import styles from "./NavLinks.module.css";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
      >
        <Home size={18} className={styles.icon} />
        Início
      </Link>

      <Link
        href="/eventos"
        className={`${styles.link} ${pathname === "/eventos" ? styles.active : ""}`}
      >
        <Calendar size={18} className={styles.icon} />
        Eventos
      </Link>      

      <Link
        href="/sobre"
        className={`${styles.link} ${pathname === "/sobre" ? styles.active : ""}`}
      >
        <Info size={18} className={styles.icon} />
        Sobre
      </Link>

      <Link
        href="/faq"
        className={`${styles.link} ${pathname === "/faq" ? styles.active : ""}`}
      >
        <HelpCircle size={18} className={styles.icon} />
        FAQ
      </Link>
    </nav>
  );
}
