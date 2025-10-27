"use client";

import { useState } from "react";
import { Loader2, Search } from "lucide-react";

export default function SearchInput({ onSearch }) {
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!busca) return;

    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000)); // simula API
    onSearch(busca);
    setLoading(false);
  };

return (
  <div className="relative mb-6 max-w-sm mx-auto">
    <div className="relative flex items-center">
      {/* Ícone à esquerda */}
      <Search className="absolute left-3 text-slate-400 w-5 h-5 pointer-events-none" />

      {/* Input com visual moderno */}
      <input
        className="
          w-full bg-white/90 backdrop-blur-sm
          placeholder:text-slate-400 text-slate-700
          border border-slate-200 rounded-full
          pl-10 pr-24 py-2.5
          shadow-sm focus:outline-none
          focus:ring-2 focus:ring-blue-400/60
          focus:border-blue-400
          transition-all duration-200
        "
        placeholder="Pesquisar livro, autor ou gênero..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />


      <button
        onClick={handleSearch}
        disabled={!busca || loading}
        className="
          absolute right-1.5 top-1.5
          flex items-center justify-center
          rounded-full py-1.5 px-3
          text-sm text-white font-medium
          shadow-md
          bg-gradient-to-r from-blue-500 to-indigo-500
          hover:from-blue-600 hover:to-indigo-600
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
          active:scale-95
        "
      >
        {loading ? (
          <Loader2 className="animate-spin w-4 h-4" />
        ) : (
          <Search className="w-4 h-4" />
        )}
      </button>
    </div>
  </div>
);

}
