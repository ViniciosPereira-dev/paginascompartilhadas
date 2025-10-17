"use client";

import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import SearchInput from "../SearchBar/SearchBar";
import ButtonLogin from "../ButtonLogin/ButtonLogin";
import ButtonSingIn from "../ButtonSingIn/ButtonSingIn";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Logo />
      </div>

      <div>
        <NavLinks />
      </div>

      <div className={styles.actions}>
        <SearchInput />
        <ButtonLogin />
        <ButtonSingIn />
      </div>
    </header>
  );
}
