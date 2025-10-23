import Hero from "@/components/Hero/Hero";
import SecaoEventos from "@/components/SecaoEventos/SecaoEventos";
import SecaoInstituicoesProximas from "../components/SecaoInstituicoesProximas/InstituicoesProximas"
import SecaoSobre from "@/components/SecaoSobre/SecaoSobre";
import SecaoFAQ from "@/components/SecaoFAQ/SecaoFAQ";
import { Footer } from "@/components/Footer/Footer";


export default function Home() {
  const eventos = [
    {
      id: 1,
      titulo: "Feira de Tecnologia 2025",
      data: "15 de Novembro, 2025",
      imagem: "/imagens/carousel3.jpg",
    },
    {
      id: 2,
      titulo: "Feira de livros",
      data: "20 de Novembro, 2025",
      imagem: "/imagens/carousel1.jpg",
    },
    {
      id: 3,
      titulo: "Mostra de Projetos",
      data: "10 de Dezembro, 2025",
      imagem: "/imagens/carousel2.jpg",
    },
  ];

  return (
    <main>
      <Hero />
      <SecaoInstituicoesProximas />      
      <SecaoEventos eventos={eventos} />
      <SecaoSobre/>
      <SecaoFAQ/>
      <Footer/>
    </main>
  );
}
