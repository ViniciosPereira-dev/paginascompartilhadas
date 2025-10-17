"use client";

import React from "react";
import Image from "next/image";
import styles from "./Logo.module.css";

interface LogoProps {
  size?: number;
}

export default function Logo({ size = 80 }: LogoProps) {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/imagens/logo.png"
        alt="Logo"
        width={size}
        height={size}
        className={styles.logoImage}
      />
    </div>
  );
}
