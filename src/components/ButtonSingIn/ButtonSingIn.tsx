import styles from "./ButtonSingIn.module.css"
import { UserPlus } from "lucide-react";
import Link from "next/link";

export default function ButtonSingIn(){
    return(
    <Link href="/cadastro" passHref>
    <button
      className={styles.button}
      title="Cadastrar"
    >
      <UserPlus size={22} />
    </button>
    </Link>
    )
}


