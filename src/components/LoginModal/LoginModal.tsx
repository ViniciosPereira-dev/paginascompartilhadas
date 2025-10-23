import React from "react";
import styles from "./LoginModal.module.css"
import { LogIn } from "lucide-react";
import Link from "next/link";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
 
export function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
 
  return (
    <>
      <Button title="Entrar" onClick={handleOpen} className={styles.btnLogin}><LogIn size={22}/></Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4 blue-gray-400">
            <Typography variant="h4" className={styles.modalTittle} >
              Entrar
            </Typography>

            <Typography className="-mb-2" variant="h6">
              Seu E-mail
            </Typography>
            <Input label="E-mail" size="lg" color="blue"/>
            <Typography className="-mb-2" variant="h6">
              Sua Senha
            </Typography>
            <Input label="Senha" size="lg" color="blue"/>
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Manter conectado" color="blue"/>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={handleOpen} fullWidth className={styles.btnEntrar}>
              Entrar
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Não possui conta?
              <Link href="/cadastro" passHref>
                <Typography
                  as="a"
                  variant="small"
                  className={styles.btnCadastrar}
                >
                  Cadastrar
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}