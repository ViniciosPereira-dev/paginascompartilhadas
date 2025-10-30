import { Button } from "@material-tailwind/react";
import styles from "./ButtonSingIn.module.css"
import { User } from "lucide-react";
import Link from "next/link";

export default function ButtonSingIn(){
    return(
    <Link href="/cadastro" passHref>
      <Button
        title="Entrar"
        className="p-2 sm:p-3 rounded-full flex items-center justify-center"
      >
        <User size={22} />
      </Button>
    </Link>
    )
}


