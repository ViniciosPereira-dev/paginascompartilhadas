"use client";

import React, { useState } from "react";
import {  Loader2, XCircle } from "lucide-react";
import CardInstituicao from "../CardInstituicao/CardInstituicao";


import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Input,
  Button,
  Spinner,
} from "@material-tailwind/react";

import { instituicoesMock } from "@/data/instituicoes";

export default function InstituicoesProximas() {
  const [cep, setCep] = useState("");
  const [resultados, setResultados] = useState([]);
  const [buscou, setBuscou] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const buscarInstituicoes = async () => {
    if (cep.length < 8) {
      setErro("Digite um CEP válido (8 números).");
      return;
    }

    setErro("");
    setLoading(true);
    setBuscou(false);
    setResultados([]);

    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await resposta.json();

      if (dados.erro) {
        setErro("CEP não encontrado. Verifique e tente novamente.");
        setLoading(false);
        return;
      }

      const cidade = dados.localidade;
      const estado = dados.uf;

      const filtradas = instituicoesMock.filter(
        (i) => i.cidade === cidade && i.estado === estado
      );

      setResultados(filtradas);
      setBuscou(true);
    } catch (e) {
      setErro("Erro ao buscar CEP. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  const limparBusca = () => {
    setCep("");
    setResultados([]);
    setBuscou(false);
    setErro("");
  };

  return (
    <section className="w-full mt-8 flex flex-col items-center gap-8 bg-gray-50 p-4">
      <Typography variant="h3" className="text-center text-gray-700 font-bold">
        Encontre instituições próximas de você
      </Typography>

      <div className="flex flex-col md:flex-row gap-4 items-center relative">
        <div className="relative w-64">
          <Input
            label="Digite seu CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            color="blue"
            className="pr-10"
          />

          {cep && (
            <button
              onClick={limparBusca}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-red-500 transition"
              aria-label="Limpar CEP"
            >
              <XCircle size={20} />
            </button>
          )}
        </div>

        <Button
          onClick={buscarInstituicoes}
          color="blue"
          className="px-8"
          disabled={loading}
        >
          {loading ? "Buscando..." : "Buscar"}
        </Button>
      </div>

      {erro && (
        <Typography color="red" className="text-sm">
          {erro}
        </Typography>
      )}

      {(loading || buscou) && (
        <div className="flex flex-wrap justify-center gap-4 mt-4 min-h-[200px] transition-all duration-300">
          {loading && (
            <div className="flex flex-col items-center justify-center mt-4 animate-fadeIn">
              <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
              <Typography color="gray">Carregando instituições...</Typography>
            </div>
          )}

          {!loading && buscou && resultados.length === 0 && !erro && (
            <Typography color="gray">
              Nenhuma instituição próxima encontrada 😕
            </Typography>
          )}

          {!loading &&
            resultados.map((inst, index) => (
              <CardInstituicao key={index} inst={inst} />
            ))}
        </div>
      )}  
    </section>
  );
}