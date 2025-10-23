"use client";

import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="w-full py-8 px-6 bg-blue-gray-900 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <img
            src="/imagens/logo.png"
            alt="Logo da plataforma"
            className="w-20 h-20"
          />
        </div>

        {/* Links do site */}
        <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
          {[
            { label: "Início", href: "#hero" },
            { label: "Instituições", href: "#instituicoes" },
            { label: "Eventos", href: "#eventos" },
            { label: "Sobre", href: "#sobre" },
            { label: "FAQ", href: "#faq" },
          ].map((link, index) => (
            <li key={index}>
              <Typography
                as="a"
                href={link.href}
                color="blue-gray"
                className="font-normal hover:text-blue-500 transition-colors"
              >
                {link.label}
              </Typography>
            </li>
          ))}
        </ul>
      </div>

      {/* Linha divisória e direitos */}
      <hr className="my-6 border-blue-gray-50" />
      <Typography
        color="blue-gray"
        className="text-center text-sm font-normal"
      >
        &copy; {new Date().getFullYear()} Páginas Compartilhadas
      </Typography>
    </footer>
  );
}
