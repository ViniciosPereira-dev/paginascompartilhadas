"use client";

import React, { useState } from "react";
import {  Loader2 } from "lucide-react";
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

const instituicoesMock = [
  {
    nome: "Biblioteca Esperança",
    cidade: "Votorantim",
    estado: "SP",
    distancia: "1.2 km",
    descricao: "Promove acesso gratuito à leitura e realiza oficinas literárias para crianças.",
    imagem: "/imagens/card1.jpg",
  
  },
  {
    nome: "Casa do Saber",
    cidade: "Votorantim",
    estado: "SP",
    distancia: "2.3 km",
    descricao: "Espaço comunitário com troca de livros, rodas de leitura e incentivo à escrita.",
    imagem: "/imagens/card2.jpg",

  },
  {
    nome: "Centro Cultural Páginas Vivas",
    cidade: "Votorantim",
    estado: "SP",
    distancia: "3.1 km",
    descricao: "Desenvolve projetos de leitura e conta com um acervo literário aberto ao público.",
    imagem: "/imagens/card3.jpg",

  },
  {
    nome: "Instituto Leitura Viva",
    cidade: "Sorocaba",
    estado: "SP",
    distancia: "4.5 km",
    descricao: "Oferece programas de alfabetização e clubes de leitura para todas as idades.",

  },
  {
    nome: "Projeto Letras do Amanhã",
    cidade: "Sorocaba",
    estado: "SP",
    distancia: "5.8 km",
    descricao: "Iniciativa social que distribui livros e promove feiras literárias locais.",

  },
];


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
      // Consulta o ViaCEP
      const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await resposta.json();

      if (dados.erro) {
        setErro("CEP não encontrado. Verifique e tente novamente.");
        setLoading(false);
        return;
      }

      // Pega cidade e estado retornados
      const cidade = dados.localidade;
      const estado = dados.uf;

      // Filtra as instituições da mesma cidade
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

  return (
    <section id="instituicoes" className="w-full mt-8 flex flex-col items-center gap-8 bg-gray-50">
      <Typography variant="h3" className="text-center text-gray-700 font-bold">
        Encontre instituições próximas de você
      </Typography>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <Input
          label="Digite seu CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          className="w-64 "
          color="blue"
        />
        <Button
          onClick={buscarInstituicoes}
          color="blue"
          className="px-8"
          disabled={loading}
        >
          {loading ? "Buscando..." : "Buscar"}
        </Button>
      </div>

      {erro && <Typography color="red" className="text-sm">{erro}</Typography>}

      {(loading || buscou) && (
        <div className="flex flex-wrap justify-center gap-2 mt-4 min-h-[200px] transition-all duration-300">
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
