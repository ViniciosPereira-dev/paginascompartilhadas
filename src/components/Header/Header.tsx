"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import NavLinks from "../NavLinks/NavLinks";
import SearchInput from "../SearchBar/SearchBar";
import ButtonLogin from "../ButtonLogin/ButtonLogin";
import ButtonSingIn from "../ButtonSingIn/ButtonSingIn";
import { DefaultSidebar } from "../DefaultSidebar/DefaultSidebar";

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
          <Image
            src="/imagens/logo.png"
            alt="Logo"
            width={120}
            height={40}
            priority
            className={styles.logo}
          />
        </div>

        {/* NAV DESKTOP */}
        <nav className={styles.navDesktop}>
          <NavLinks />
          <SearchInput />
          <div className={styles.actions}>
            <ButtonLogin />
            <ButtonSingIn />
          </div>
        </nav>

        {/* BOTÃO HAMBÚRGUER */}
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

      {/* SIDEBAR — AGORA VINDO DA ESQUERDA */}
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
