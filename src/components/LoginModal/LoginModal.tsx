import React from "react";
import styles from "./LoginModal.module.css"
import { LogIn } from "lucide-react";
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
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray" className={styles.modalTittle} >
              Entrar
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Seu E-mail
            </Typography>
            <Input label="E-mail" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Sua Senha
            </Typography>
            <Input label="Senha" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Manter conectado" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Entrar
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Não possui conta?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Cadastrar
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}