"use client";
import { useState, useMemo } from "react";
import { livrosMock } from "@/data/livros";
import SearchInput from "@/components/SearchInputMob/SearchInput";
import LivrosMobile from "@/components/LivrosMob/LivrosMobile";
import LivroModal from "@/components/LivroModalMob/LivroModal";
import { Typography } from "@material-tailwind/react";

export default function LivrosPage() {
  const [busca, setBusca] = useState("");
  const [filtroGenero, setFiltroGenero] = useState("Todos");
  const [buscou, setBuscou] = useState(true);

  const [livroSelecionado, setLivroSelecionado] = useState(null);

  const livrosFiltrados = useMemo(() => {
    return livrosMock.filter((livro) => {
      const matchBusca =
        livro.titulo?.toLowerCase().includes(busca.toLowerCase()) ||
        livro.autor?.toLowerCase().includes(busca.toLowerCase()) ||
        livro.genero?.toLowerCase().includes(busca.toLowerCase());

      const matchGenero =
        filtroGenero === "Todos" || livro.genero === filtroGenero;

      const matchDisponivel = livro.disponivel;

      return matchBusca && matchGenero && matchDisponivel;
    });
  }, [busca, filtroGenero]);

  const handleSearch = (valor) => {
    setBusca(valor);
    setBuscou(true);
  };

  return (

    <div className="block md:hidden container mx-auto px-4 py-6 space-y-6">

      <div className="text-center mb-4">
        <Typography
          variant="h3"
          className="font-bold text-gray-700 tracking-tight"
        >
          Conheça nossos livros cadastrados
        </Typography>
        <Typography
          variant="small"
          className="text-gray-600 mt-2 max-w-2xl mx-auto sm:mx-0"
        >
          Confira os livros disponíveis e solicite a doação da obra que mais te interessar!
        </Typography>
      </div>

      {/* 🔍 Barra de busca e filtro de gênero */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <SearchInput onSearch={handleSearch} />
        <div className="flex gap-3">
          <select
            value={filtroGenero}
            onChange={(e) => setFiltroGenero(e.target.value)}
            className="border border-slate-300 rounded-md px-3 py-2 text-sm"
          >
            <option>Todos</option>
            <option>Fantasia</option>
            <option>Romance</option>
            <option>Terror</option>
          </select>
        </div>
      </div>

      {/* 📚 Lista de livros */}
      <LivrosMobile
        livros={livrosFiltrados}
        buscou={buscou}
        onClickLivro={(livro) => setLivroSelecionado(livro)}
      />

      {/* 📝 Modal do livro */}
      {livroSelecionado && (
        <LivroModal
          livro={livroSelecionado}
          onClose={() => setLivroSelecionado(null)}
        />
      )}
    </div>
  );
}
