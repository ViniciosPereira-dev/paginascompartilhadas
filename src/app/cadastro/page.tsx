"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function CadastroPage() {
  const { scrollY } = useScroll();
  // O movimento da imagem vai ser mais leve que o scroll, efeito paralaxe
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Metade superior com paralaxe */}
      <motion.div
        style={{ y }}
        className="h-1/2 w-full overflow-hidden relative"
      >
        <img
          src="/imagens/cadastro.svg"
          alt="Cadastro"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Metade inferior com formulário */}
      <div className="h-1/2 w-full flex items-center justify-center bg-gray-50 px-6">
        <form className="w-full max-w-md flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-center mb-4">Cadastro</h1>

          <input
            type="text"
            placeholder="Nome completo"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Senha"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
