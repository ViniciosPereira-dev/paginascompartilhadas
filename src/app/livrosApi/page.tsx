"use client";

import { useState } from "react";
import { livrosMock } from "@/data/livros";
import SearchInput from "../../components/SearchInput/SearchInput";
import TabelaLivros from "../../components/TabelaLivros/TabelaLivros";
import LivroModal from "../../components/LivroModal/LivroModal";
import LivrosMobile from "@/components/LivrosMobile/LivrosMobile";
import { motion } from "framer-motion";


export default function LivrosApiPage() {
  const [resultados, setResultados] = useState([]);
  const [selectedLivro, setSelectedLivro] = useState(null);
  const [busca, setBusca] = useState("");

  return (
    <motion.div
      className="p-4 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }} // começa levemente abaixo e transparente
      animate={{ opacity: 1, y: 0 }}  // anima para posição final
      transition={{ duration: 0.5, ease: "easeOut" }} // duração e suavização
    >
      <h1 className="text-2xl md:text-3xl text-gray-700 font-bold mb-6 text-center">
        Pesquise livros disponíveis
      </h1>

<p className="text-center text-gray-400 mb-6 text-base sm:text-sm">
  Explore livros doados por instituições e voluntários. Clique em um livro para ver detalhes e solicitar doação.
</p>




      <SearchInput
        onSearch={(valor) => {
          setBusca(valor);
          const filtrados = livrosMock.filter(
            (livro) =>
              livro.titulo.toLowerCase().includes(valor.toLowerCase()) ||
              livro.autor.toLowerCase().includes(valor.toLowerCase()) ||
              livro.genero.toLowerCase().includes(valor.toLowerCase())
          );
          setResultados(filtrados);
        }}
      />

      

      {busca && (
        <p className="text-sm text-gray-500 mb-4 text-center">
          {resultados.length > 0
            ? `Mostrando ${resultados.length} resultado(s) para "${busca}"`
            : `Nenhum resultado encontrado para "${busca}"`}
        </p>
      )}

      {busca && (
        <div className="flex justify-center mb-4">
          <button
            onClick={() => {
              setBusca("");
              setResultados([]);
            }}
            className="text-sm text-blue-500 hover:underline"
          >
            Limpar busca
          </button>
        </div>
      )}


      <div className="block md:hidden">
        <LivrosMobile
          livros={resultados}
          onSelectLivro={setSelectedLivro}
          buscou={busca !== ""}
        />
      </div>   

      <div className="hidden md:block">
        <TabelaLivros
          livros={resultados}
          onSelectLivro={setSelectedLivro}
          buscou={busca !== ""}
        />
      </div>

      <LivroModal livro={selectedLivro} onClose={() => setSelectedLivro(null)} />

    </motion.div>


  );
}

