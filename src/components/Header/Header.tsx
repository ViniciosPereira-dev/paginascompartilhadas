"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { LoginModal } from "../LoginModalMob/LoginModal";
import ButtonSingIn from "../BtnCadastrarMob/ButtonSingIn";
import { DefaultSidebar } from "../BarraLateralMob/DefaultSidebar";



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Impede o scroll da página quando o menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <header className={styles.header}>
        {/* LOGO */}
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              src="/imagens/logo.png"
              alt="Logo"
              width={120}
              height={40}
              priority
              className={styles.logo}
            />
          </Link>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* SIDEBAR */}
      <aside className={`${styles.sidebarContainer} ${menuOpen ? styles.open : ""}`}>
        <DefaultSidebar />
      </aside>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
