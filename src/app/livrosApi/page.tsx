"use client";

import React, { useState, useEffect } from "react";
import TabelaLivros from "@/components/TabelaLivros/TabelaLivros";
import { useSearchParams } from "next/navigation";

const livrosMock = [
  { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", ano: 1954, editora: "HarperCollins" },
  { titulo: "As Crônicas de Gelo e Fogo", autor: "George R. R. Martin", genero: "Fantasia", ano: 1996, editora: "LeYa" },
  { titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Romance", ano: 1899, editora: "Globo" },
  { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", genero: "Infantil", ano: 1943, editora: "Agir" },
  { titulo: "1984", autor: "George Orwell", genero: "Distopia", ano: 1949, editora: "Companhia das Letras" },
];

export default function LivrosApiPage() {
  const searchParams = useSearchParams();
  const busca = searchParams.get("busca") || "";

  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const filtrados = livrosMock.filter(
      (livro) =>
        livro.titulo.toLowerCase().includes(busca.toLowerCase()) ||
        livro.autor.toLowerCase().includes(busca.toLowerCase()) ||
        livro.genero.toLowerCase().includes(busca.toLowerCase())
    );
    setResultados(filtrados);
  }, [busca]);

  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      <h1 className="text-2xl font-bold mb-6 text-blue-gray-700">
        Resultados da busca: "{busca}"
      </h1>

      {resultados.length > 0 ? (
        <TabelaLivros livros={resultados} />
      ) : (
        <p className="text-gray-500 mt-4">Nenhum livro encontrado 😕</p>
      )}
    </div>
  );
}
