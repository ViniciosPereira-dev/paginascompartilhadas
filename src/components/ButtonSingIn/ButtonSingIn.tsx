import styles from "./ButtonSingIn.module.css"
import { LogIn, UserPlus } from "lucide-react";

export default function ButtonSingIn(){
    return(
    <button
      className={styles.button}
      title="Cadastrar"
    >
      <UserPlus size={22} />
    </button>
    )
}