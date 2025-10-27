import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.heroMobile}>
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-[80vh] px-4">
        <h1 className="text-3xl font-bold mb-3 drop-shadow-md">
          Conecte-se através dos livros
        </h1>
        <p className="text-sm max-w-md mb-6 drop-shadow-lg">
          Doe, compartilhe e descubra novas histórias. Faça parte da nossa comunidade de leitores.
        </p>

        <div className={styles.btnContainer}>
          <button className={styles.btnDoar}>Doar</button>
          <Link href={"/livrosapi"}>
            <button className={styles.btnExplorar}>Explorar Livros</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
