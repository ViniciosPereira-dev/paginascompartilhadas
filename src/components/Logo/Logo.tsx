"use client";

import React from "react";
import styles from "./Logo.module.css";

interface LogoProps {
  size?: number;
}

export default function Logo({ size = 80 }: LogoProps) {
  return (
    <div>
      <a href="#">
        <img src="/imagens/logo.png" alt="logo" className={styles.logoImage} />
      </a>
    </div>
  );
}
