"use client";

import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { Typography } from "@material-tailwind/react";
import TabelaLivros from "../TabelaLivros/TabelaLivros";
import { useRouter } from "next/navigation";

const livrosMock = [
  {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    genero: "Fantasia",
    ano: 1954,
    editora: "HarperCollins",
  },
  {
    titulo: "As Crônicas de Gelo e Fogo",
    autor: "George R. R. Martin",
    genero: "Fantasia",
    ano: 1996,
    editora: "LeYa",
  },
  {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    genero: "Romance",
    ano: 1899,
    editora: "Globo",
  },
  {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    genero: "Infantil",
    ano: 1943,
    editora: "Agir",
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    genero: "Distopia",
    ano: 1949,
    editora: "Companhia das Letras",
  },
];

// --- Componente principal ---
export default function SearchLivros() {
  const [busca, setBusca] = useState("");
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const router = useRouter();

const buscarLivros = async () => {
  setLoading(true);
  setErro("");
  setResultados([]);

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const filtrados = livrosMock.filter(
      (livro) =>
        livro.titulo.toLowerCase().includes(busca.toLowerCase()) ||
        livro.autor.toLowerCase().includes(busca.toLowerCase()) ||
        livro.genero.toLowerCase().includes(busca.toLowerCase())
    );

    if (filtrados.length === 0) {
      setErro("Nenhum livro encontrado 😕");
    } else {
      setResultados(filtrados);
      router.push(`/livrosApi?busca=${encodeURIComponent(busca)}`);
    }
  } catch (e) {
    setErro("Erro ao buscar livros.");
  } finally {
    setLoading(false);
  }
};

   return (
    <div className="relative w-full max-w-sm min-w-[200px]">
      <input
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-blue-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="George Orwell"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <button
        onClick={buscarLivros}
        disabled={!busca || loading}
        className={`${styles.button} absolute top-1 right-1 flex items-center rounded py-1 px-2.5 text-sm text-white transition-all shadow-sm hover:shadow disabled:opacity-50`}
      >
        {loading ? (
          <span className="animate-spin mr-2 border-2 border-white border-t-transparent rounded-full w-4 h-4" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="1 1 24 24"
            fill="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        )}
        Buscar
      </button>
    </div>
  );
}
