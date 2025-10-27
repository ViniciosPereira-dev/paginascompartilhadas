"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function LivrosMobile({ livros, onSelectLivro, buscou }) {
  if (!buscou) return null;
  if (!livros || livros.length === 0) {
    return <p className="text-center mt-4">Nenhum livro encontrado 😕</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <AnimatePresence>
        {livros.map((livro, index) => (
          <motion.div
            key={livro.titulo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white shadow-md rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all"
            onClick={() => onSelectLivro(livro)}
          >
            <img
              src={livro.imagem || "/placeholder.png"}
              alt={livro.titulo}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">{livro.titulo}</h3>
            <p className="text-gray-600 text-sm">{livro.autor}</p>
            <p className="text-gray-500 text-xs">{livro.genero} • {livro.ano}</p>
            <span
              className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                livro.disponivel
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {livro.disponivel ? "Disponível" : "Indisponível"}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
