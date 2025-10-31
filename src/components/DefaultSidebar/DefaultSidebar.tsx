"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  Home,
  Info,
  Calendar,
  HelpCircle,
  BookOpen,
  PlusCircle,
  User,
  MessageSquare,
  Building2,
} from "lucide-react";
import { LoginModal } from "../LoginModalMob/LoginModal";

export default function MobileSidebar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [clickedSection, setClickedSection] = useState("");

  const mainLinks = [
    { href: "/#home", label: "Início", icon: Home, id: "home" },
    { href: "/livrosapi", label: "Livros", icon: BookOpen },
    { href: "/#instituicoes", label: "Instituições", icon: Building2, id: "instituicoes" },
    { href: "/#eventos", label: "Eventos", icon: Calendar, id: "eventos" },
    { href: "/#sobre", label: "Sobre", icon: Info, id: "sobre" },
    { href: "/#faq", label: "FAQ", icon: HelpCircle, id: "faq" },
  ];

  const restrictedLinks = [
    { href: "/doar", label: "Doar Livro", icon: PlusCircle },
    { href: "/perfil", label: "Perfil", icon: User },
    { href: "/forum", label: "Fórum", icon: MessageSquare },
  ];

  // Detecta qual seção está visível
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (hash: string | null) => {
    if (hash) setClickedSection(hash);
  };

  const renderLink = ({ href, label, icon: Icon, id, restricted }: any) => {
    const linkHash = href.includes("#") ? href.split("#")[1] : null;

    const isActive =
      pathname === href ||
      (linkHash &&
        pathname === "/" &&
        (linkHash === activeSection || linkHash === clickedSection || (linkHash === "home" && window.scrollY === 0)));

    const content = (
      <ListItem
        className={`flex items-center gap-3 py-3 px-4 rounded-md transition-all duration-200 ${
          restricted
            ? "text-gray-400 cursor-not-allowed opacity-70"
            : isActive
            ? "bg-blue-50 text-blue-600 font-semibold"
            : "text-blue-gray-800 hover:bg-blue-50"
        }`}
        onClick={() => handleClick(linkHash)}
      >
        <ListItemPrefix>
          <Icon
            className={`h-6 w-6 transition-colors ${
              restricted
                ? "text-gray-400"
                : isActive
                ? "text-blue-600"
                : "text-blue-gray-600 group-hover:text-blue-500"
            }`}
          />
        </ListItemPrefix>
        <span className="text-base font-medium">{label}</span>
        {restricted && <span className="ml-auto text-gray-400 text-xs">🔒</span>}
      </ListItem>
    );

    return restricted ? (
      <Tooltip key={href} content="Disponível apenas para logados" placement="right">
        {content}
      </Tooltip>
    ) : (
      <Link key={href} href={href}>
        {content}
      </Link>
    );
  };

  return (
    <Card className="w-full max-w-[18rem] h-full flex flex-col justify-between p-3 shadow-xl shadow-blue-gray-900/5 rounded-none">
      {/* Cabeçalho */}
      <div className="flex flex-col items-center py-6 border-b border-blue-gray-100">
        <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-300">
          <img
            src="imagens/avatar.svg"
            alt="Usuário padrão"
            className="w-full h-full object-cover"
          />
        </div>
        <Typography variant="h6" className="mt-3 text-blue-gray-700">
          Visitante
        </Typography>
        <Typography className="text-xs text-blue-gray-400 text-center">
          Faça login para acessar mais recursos
        </Typography>
      </div>

      {/* Links */}
      <div className="flex-1 overflow-y-auto mt-3">
        <List className="space-y-1">
          {mainLinks.map((link) => renderLink({ ...link }))}
        </List>
        <div className="my-3 border-t border-blue-gray-100" />
        <List className="space-y-1">
          {restrictedLinks.map((link) => renderLink({ ...link, restricted: true }))}
        </List>
      </div>

      {/* Botão de login/cadastro */}
      <div className="mt-4 w-full">
        <LoginModal/>
      </div>
    </Card>
  );
}
