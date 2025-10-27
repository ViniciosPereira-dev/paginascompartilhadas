"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function LivroModal({ livro, onClose, onSolicitar, onChat, onFavorito }) {
  const [verMais, setVerMais] = useState(false);
  const [fechando, setFechando] = useState(false);

  if (!livro) return null;

  const isDisponivel = livro.disponivel;

  const handleClose = () => {
    setFechando(true);
    setTimeout(() => {
      setFechando(false);
      onClose();
    }, 300); // mesmo tempo do transition
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 z-50 flex items-end md:items-center justify-center p-0 md:p-4"
        onClick={handleClose}
      >
        <motion.div
          key="modal"
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: fechando ? 100 : 0,
            opacity: fechando ? 0 : 1,
          }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 25, duration: 0.3 }}
          className="bg-white rounded-t-3xl md:rounded-2xl w-full md:max-w-2xl max-h-[95vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header (mobile-friendly) */}
          <div className="p-4 border-b flex gap-4 items-center">
            <img
              src={livro.imagem || "/placeholder.png"}
              alt={livro.titulo}
              className="w-20 h-28 object-cover rounded-lg shadow"
            />
            <div className="flex-1">
              <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
                {livro.titulo}
              </h2>
              <p className="text-sm text-gray-500">{livro.autor}</p>
              <p
                className={`text-sm font-medium ${
                  isDisponivel ? "text-green-600" : "text-red-600"
                }`}
              >
                {isDisponivel ? "Disponível" : "Indisponível"}
              </p>
            </div>
          </div>

          {/* Ações principais */}
          <div className="p-4 flex flex-col gap-3">
            {isDisponivel && (
              <button
                onClick={() => onSolicitar(livro)}
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-xl font-medium shadow hover:from-green-600 hover:to-teal-600 transition"
              >
                Solicitar Doação
              </button>
            )}

            <button
              onClick={() => onChat(livro)}
              className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium shadow hover:bg-blue-600 transition"
            >
              Enviar Mensagem
            </button>
          </div>

          {/* Ver mais (mobile) */}
          <div className="p-4 border-t">
            <button
              className="flex items-center justify-center w-full text-gray-600 hover:text-gray-800"
              onClick={() => setVerMais((prev) => !prev)}
            >
              {verMais ? (
                <>
                  Ocultar detalhes <ChevronUp className="ml-2 w-4 h-4" />
                </>
              ) : (
                <>
                  Ver mais detalhes <ChevronDown className="ml-2 w-4 h-4" />
                </>
              )}
            </button>

            <motion.div
              initial={false}
              animate={{
                height: verMais ? "auto" : 0,
                opacity: verMais ? 1 : 0,
              }}
              className="overflow-hidden mt-2 text-sm text-gray-700 space-y-1"
            >
              <p><span className="font-semibold">Gênero:</span> {livro.genero}</p>
              <p><span className="font-semibold">Editora:</span> {livro.editora}</p>
              <p><span className="font-semibold">Ano:</span> {livro.ano}</p>
              <p><span className="font-semibold">Doador:</span> {livro.doador || "Não informado"}</p>
              <p><span className="font-semibold">Observações:</span> {livro.observacoes || "Nenhuma"}</p>
              <p><span className="font-semibold">Sinopse:</span> {livro.sinopse || "Sem sinopse"}</p>
            </motion.div>
          </div>

          {/* Ação secundária e fechar */}
          <div className="p-4 flex flex-col gap-3 border-t">
            <button
              onClick={() => onFavorito(livro)}
              className="w-full bg-gray-100 text-gray-800 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
            >
              Adicionar à Lista de Interesse
            </button>

            {/* Botão fechar com animação */}
            <button
              onClick={handleClose}
              className="w-full bg-gray-200 text-gray-800 py-3 rounded-xl font-medium hover:bg-gray-300 transition"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
