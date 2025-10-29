"use client";
import React from "react";
import styles from "./LoginModal.module.css";
import { LogIn } from "lucide-react";
import Link from "next/link";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { Formik, Form, ErrorMessage } from "formik";
import { loginSchema } from "@/Schemas/loginSchema"; // 🔹 importando schema daqui!

export function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const initialValues = {
    email: "",
    senha: "",
    manterConectado: false,
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Login enviado:", values);
    resetForm();
    setOpen(false);
  };

  return (
    <>
      <Button
        title="Entrar"
        onClick={handleOpen}
        className={styles.btnLogin}
      >
        <LogIn size={22} />
      </Button>

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema} // ✅ agora ele usa o schema externo
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleBlur, values }) => (
              <Form>
                <CardBody className="flex flex-col gap-4 blue-gray-400">
                  <Typography variant="h4" className={styles.modalTittle}>
                    Entrar
                  </Typography>

                  <Typography className="-mb-2" variant="h6">
                    Seu E-mail
                  </Typography>
                  <Input
                    name="email"
                    label="E-mail"
                    size="lg"
                    color="blue"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  <Typography className="-mb-2" variant="h6">
                    Sua Senha
                  </Typography>
                  <Input
                    type="password"
                    name="senha"
                    label="Senha"
                    size="lg"
                    color="blue"
                    value={values.senha}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    name="senha"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  <div className="-ml-2.5 -mt-3">
                    <Checkbox
                      name="manterConectado"
                      label="Manter conectado"
                      color="blue"
                      checked={values.manterConectado}
                      onChange={handleChange}
                    />
                  </div>
                </CardBody>

                <CardFooter className="pt-0">
                  <Button type="submit" fullWidth className={styles.btnEntrar}>
                    Entrar
                  </Button>

                  <Typography variant="small" className="mt-4 flex justify-center">
                    Não possui conta?
                    <Link
                      href="/cadastro"
                      className={styles.btnCadastrar}
                      onClick={() => setOpen(false)}
                    >
                      Cadastrar
                    </Link>
                  </Typography>
                </CardFooter>
              </Form>
            )}
          </Formik>
        </Card>
      </Dialog>
    </>
  );
}
