"use client";

import { useState } from "react";
import { Loader2, Search, X } from "lucide-react";

export default function SearchInput({ onSearch }) {
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!busca) return;
    setLoading(true);
    await new Promise((res) => setTimeout(res, 500)); // simula requisição
    onSearch(busca);
    setLoading(false);
  };

  const handleClear = () => {
    setBusca("");
    onSearch("");
  };

  return (
    <div className="w-full max-w-sm min-w-[200px] flex items-center gap-2 mt-4 mx-auto">


      {/* 🔤 Input de busca */}
      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        placeholder="Livro, autor ou gênero..."
        className="
          flex-1 bg-transparent
          placeholder:text-slate-400 text-slate-700 text-sm
          border border-slate-200 rounded-md
          px-3 py-2
          transition duration-300 ease
          focus:outline-none focus:border-slate-400
          hover:border-slate-300
          shadow-sm focus:shadow
        "
      />

      <button
        type="button"
        onClick={handleSearch}
        disabled={!busca || loading}
        aria-label="Pesquisar"
        className="
          p-2 rounded-md bg-slate-800 text-white shadow-sm
          hover:bg-slate-700 transition
          disabled:opacity-50 disabled:pointer-events-none
        "
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Search className="w-4 h-4" />
        )}
      </button>

      {/* ❌ Botão de limpar */}
      <button
        type="button"
        onClick={handleClear}
        disabled={!busca}
        aria-label="Limpar busca"
        className="
          p-2 rounded-md border border-slate-200 text-slate-500
          hover:text-slate-700 hover:border-slate-400
          transition disabled:opacity-50 disabled:pointer-events-none
        "
      >
        <X className="w-4 h-4" />
      </button>

    </div>
  );
}
