"use client";

import { Button, Typography } from "@material-tailwind/react";
import styles from "./SecaoSobre.module.css";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function SecaoSobre() {
  return (
    <section
      id="sobre"
      className={`${styles.secaoSobre} bg-gray-50 px-6 text-center`}
    >
      {/* Conteúdo central */}
      <div className="flex flex-col items-center justify-center max-w-md">
        {/* Imagem ilustrativa */}
        <img
          src="/imagens/aboutUs.svg"
          alt="Ilustração sobre colaboração e equipe"
          className="w-full max-w-xs h-auto mb-6 object-contain"
        />

        {/* Título */}
        <Typography variant="h4"  className="font-bold mb-3 text-gray-700">
          Sobre Nós
        </Typography>

        {/* Texto descritivo */}
        <Typography
          variant="paragraph"
          color="gray"
          className="text-base leading-relaxed mb-6"
        >
          Somos uma equipe dedicada a conectar pessoas, ideias e instituições.
          Nosso objetivo é facilitar o acesso à informação e promover a
          colaboração por meio da tecnologia e da inovação.
        </Typography>

        {/* Botão e redes sociais */}
        <div className="mt-4 flex flex-col items-center gap-4">
          <Button>Saiba mais</Button>

          <div className="flex justify-center gap-5">
            <Instagram className="w-6 h-6  hover:scale-110 transition-transform" />
            <Linkedin className="w-6 h-6hover:scale-110 transition-transform" />
            <Facebook className="w-6 h-6 hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}
