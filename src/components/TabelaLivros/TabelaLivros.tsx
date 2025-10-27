"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function TabelaLivros({ livros, onSelectLivro, buscou }) {
  if (!buscou) return null;
  if (!livros || livros.length === 0) {
    return <p className="text-center mt-4">Nenhum livro encontrado 😕</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-slate-300">
        <thead>
          <tr>
            <th className="border px-2 py-1 md:px-4 md:py-2">Título</th>
            <th className="border px-2 py-1 md:px-4 md:py-2">Autor</th>
            <th className="border px-2 py-1 md:px-4 md:py-2">Gênero</th>
            <th className="border px-2 py-1 md:px-4 md:py-2">Ano</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {livros.map((livro, index) => (
              <motion.tr
                key={livro.titulo}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => onSelectLivro(livro)}
              >
                <td className="border px-2 py-1 md:px-4 md:py-2">{livro.titulo}</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">{livro.autor}</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">{livro.genero}</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">{livro.ano}</td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
}
