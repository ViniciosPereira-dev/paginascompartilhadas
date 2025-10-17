"use client";

import { useState } from "react";
import { LogIn } from "lucide-react";
import styles from "./ButtonLogin.module.css";

export default function ButtonLogin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão principal */}
      <button
        className={styles.button}
        title="Entrar"
        onClick={() => setIsOpen(true)}
      >
        <LogIn size={22} />
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsOpen(false)} // fecha ao clicar fora
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()} // evita fechar ao clicar dentro
          >
            <div className={styles.header}>
              <h3>Entrar</h3>
            </div>

            <div className={styles.content}>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="email" placeholder="Seu email" />
              </div>

              <div className={styles.inputGroup}>
                <label>Senha</label>
                <input type="password" placeholder="Sua senha" />
              </div>

              <div className={styles.checkbox}>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Lembrar-me</label>
              </div>
            </div>

            <div className={styles.footer}>
              <button className={styles.confirmButton}>Entrar</button>
              <p>
                Não tem uma conta?{" "}
                <a href="#" className={styles.link}>
                  Cadastre-se
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
