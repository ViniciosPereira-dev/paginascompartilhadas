"use client";
import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import CarouselEventos from "../CarouselEventosMob/CarouselEventos";
import styles from "./SecaoEventos.module.css";

export default function SecaoEventos({ eventos }) {
  return (
    <section id="eventos" className="px-4 pt-8 bg-gray-50">
      <div className="mb-8 text-center sm:text-left">
        <Typography
          variant="h3"
          className="font-bold text-gray-700 tracking-tight"
        >
          Próximos Eventos
        </Typography>
        <Typography
          variant="small"
          className="text-gray-600 mt-2 max-w-2xl mx-auto sm:mx-0"
        >
          Fique por dentro das próximas atividades e participe dos eventos que estão por vir.
        </Typography>
      </div>

      <CarouselEventos eventos={eventos} />

      <Link href="/#eventos">
        <Button variant="text" className={styles.btnVermais}>
          todos eventos{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </Link>
    </section>
  );
}
