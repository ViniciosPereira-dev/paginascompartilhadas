"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";
import NavLinks from "../NavLinks/NavLinks";
import SearchInput from "../SearchBar/SearchBar";
import ButtonLogin from "../ButtonLogin/ButtonLogin";
import ButtonSingIn from "../ButtonSingIn/ButtonSingIn";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
<<<<<<< HEAD
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.navBar}>
=======
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

      {/* MENU (links + ações) */}
      <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
        <div className={styles.nav_Mobile}>
>>>>>>> db875b1 (att)
        <NavLinks />
        </div>
                  <SearchInput />
        <div className={styles.actions}>
          <ButtonLogin />
          <ButtonSingIn />
        </div>
      </nav>

      {/* BOTÃO HAMBURGUER */}
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </header>
  );
}
