"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const faqs = [
  {
    pergunta: "Como posso participar dos eventos?",
    resposta:
      "Acesse a seção de eventos, escolha o que deseja e siga as instruções para inscrição. Alguns eventos podem exigir cadastro prévio.",
  },
  {
    pergunta: "A plataforma é gratuita?",
    resposta:
      "Sim, o acesso básico é totalmente gratuito. Algumas funcionalidades adicionais poderão ser disponibilizadas futuramente.",
  },
  {
    pergunta: "Posso cadastrar minha instituição?",
    resposta:
      "Sim! Acesse a seção de instituições e preencha o formulário de cadastro. Nossa equipe fará a validação antes da publicação.",
  },
  {
    pergunta: "Como entro em contato com o suporte?",
    resposta:
      "Você pode enviar uma mensagem pelo formulário de contato ou e-mail. Nossa equipe retornará o mais rápido possível.",
  },
];

export default function SecaoFAQ() {
  const [aberto, setAberto] = useState(null);

  const togglePergunta = (index) => {
    setAberto(aberto === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-8 px-6">
      <div className="max-w-screen-md mx-auto">
        {/* Título */}
        <Typography
          variant="h4"
          color="blue-gray"
          className="font-bold text-center mb-10"
        >
          Perguntas Frequentes
        </Typography>

        {/* Lista de perguntas */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              {/* Cabeçalho da pergunta */}
              <button
                onClick={() => togglePergunta(index)}
                className="flex justify-between items-center w-full p-4 text-left"
              >
                <div className="flex items-center">
                  <HelpCircle className="w-5 h-5 text-blue-500 mr-2" />
                  <Typography
                    variant="h6"
                    className="text-gray-800 font-semibold"
                  >
                    {faq.pergunta}
                  </Typography>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${
                    aberto === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Resposta com animação leve */}
              <motion.div
                initial={false}
                animate={{
                  height: aberto === index ? "auto" : 0,
                  opacity: aberto === index ? 1 : 0,
                }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className="overflow-hidden px-6"
              >
                <Typography
                  color="gray"
                  className="text-base leading-relaxed pb-4"
                >
                  {faq.resposta}
                </Typography>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
