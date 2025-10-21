"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { Home, Info, Calendar, HelpCircle, BookOpen, PlusCircle, Users, MessageSquare } from "lucide-react";
import SearchInput from "../SearchBar/SearchBar";
import styles from "./DefaultSidebar.module.css"
import ButtonLogin from "../ButtonLogin/ButtonLogin";
import ButtonSingIn from "../ButtonSingIn/ButtonSingIn";
import Logo from "../Logo/Logo";

export function DefaultSidebar() {
  const pathname = usePathname();

const links = [
  { href: "/", label: "Início", icon: Home },
  { href: "/livros", label: "Livros", icon: BookOpen },
  { href: "/doar", label: "Doar Livro", icon: PlusCircle },
  { href: "/comunidade", label: "Comunidade", icon: Users },
  { href: "/forum", label: "Fórum", icon: MessageSquare },
  { href: "/eventos", label: "Eventos", icon: Calendar },
  { href: "/sobre", label: "Sobre", icon: Info },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
];

  return (
    <Card className="h-screen w-full max-w-[18rem] p-3 shadow-xl shadow-blue-gray-900/5 rounded-none">
      {/* Cabeçalho */}
      <div className="flex flex-col items-center py-6 border-b border-blue-100">
        <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Usuário padrão"
            className="w-full h-full object-cover"
          />
        </div>
        <Typography variant="h6" className="mt-3 text-blue-gray-700">
          Visitante
        </Typography>
        <Typography className="text-xs text-blue-gray-400">
          Faça login para acessar mais recursos
        </Typography>
      </div>

      {/* Campo de busca */}
      <div  className={styles.inputSearch}>
        <SearchInput />
      </div>

      {/* Lista de Navegação */}
<List className="p-0">
          {links.map(({ href, label, icon: Icon }) => {
            const isRestricted = ["/doar", "/forum", "/comunidade", "/livros"].includes(href);
            const isActive = pathname === href;

            return (
              <div key={href} className="relative group">
                <Link href={isRestricted ? "#" : href}>
                  <ListItem
                    className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all duration-200 ${
                      isRestricted
                        ? "text-gray-400 cursor-not-allowed opacity-70"
                        : isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-blue-gray-800 hover:bg-blue-50"
                    }`}
                  >
                    <ListItemPrefix className="mr-1">
                      <Icon
                        className={`h-5 w-5 ${
                          isRestricted
                            ? "text-gray-400"
                            : isActive
                            ? "text-blue-600"
                            : "text-blue-gray-600"
                        }`}
                      />
                    </ListItemPrefix>
                    <span className="text-sm font-medium">{label}</span>

                    {/* Cadeado */}
                    {isRestricted && (
                      <span className="ml-auto text-gray-400 text-xs">🔒</span>
                    )}
                  </ListItem>
                </Link>

                {/* Tooltip */}
                {isRestricted && (
                  <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Disponível apenas para logados
                  </span>
                )}
              </div>
            );
          })}
        </List>
      
      <div>
        <div className={styles.btnSidebar}>
          <ButtonLogin />
          <ButtonSingIn/>
        </div>
      </div>

    </Card>

    
  );
}
