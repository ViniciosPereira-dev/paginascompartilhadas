"use client";

import { Formik, Form, ErrorMessage } from "formik";
import { cadastroSchema } from "@/Schemas/cadastroSchema";
import { Input, Button, Select, Option, Typography } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

export default function CadastroPage() {
  const initialValues = {
    nome: "",
    email: "",
    senha: "",
    confirmacao: "",
    tipoUsuario: "",
    nascimento: "",
    cpfCnpj: "",
    endereco: "",
  };

  const handleSubmit = (values) => {
    console.log("Form enviado:", values);
  };

  return (
    <>
      {/* 🔹 Imagem Parallax */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('/imagens/hero.jpg')",
            transform: `translateY(0px)`,
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
      </section>

      {/* 🔹 Formulário com Framer Motion */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md mx-auto -mt-16 bg-white p-6 rounded-t-3xl shadow-lg z-20 relative"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={cadastroSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values, isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <Input
                name="nome"
                label="Nome completo"
                value={values.nome}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="nome" component="div" className="text-red-500 text-sm" />

              <Input
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

              <Input
                type="password"
                name="senha"
                label="Senha"
                value={values.senha}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="senha" component="div" className="text-red-500 text-sm" />

              <Input
                type="password"
                name="confirmacao"
                label="Confirmar senha"
                value={values.confirmacao}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="confirmacao" component="div" className="text-red-500 text-sm" />

              <Select
                name="tipoUsuario"
                label="Tipo de usuário"
                value={values.tipoUsuario}
                onChange={(val) => handleChange({ target: { name: "tipoUsuario", value: val } })}
              >
                <Option value="doador">Doador</Option>
                <Option value="receptor">Receptor</Option>
                <Option value="ambos">Ambos</Option>
              </Select>
              <ErrorMessage name="tipoUsuario" component="div" className="text-red-500 text-sm" />

              <Input
                type="date"
                name="nascimento"
                label="Data de nascimento"
                value={values.nascimento}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="nascimento" component="div" className="text-red-500 text-sm" />

              <Input
                name="cpfCnpj"
                label={
                  values.tipoUsuario === "doador"
                    ? "CPF"
                    : values.tipoUsuario === "receptor"
                    ? "CNPJ"
                    : "CPF ou CNPJ"
                }
                placeholder={
                  values.tipoUsuario === "doador"
                    ? "Digite seu CPF"
                    : values.tipoUsuario === "receptor"
                    ? "Digite seu CNPJ"
                    : "Digite CPF ou CNPJ"
                }
                value={values.cpfCnpj}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="cpfCnpj" component="div" className="text-red-500 text-sm" />

              <Input
                name="endereco"
                label="Endereço"
                value={values.endereco}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="endereco" component="div" className="text-red-500 text-sm" />

              <Button type="submit" color="blue" disabled={isSubmitting}>
                Criar conta
              </Button>

              <Button variant="outlined" className="flex items-center justify-center gap-2">
                <FcGoogle size={22} /> Entrar com Google
              </Button>
            </Form>
          )}
        </Formik>

        <section className="text-center mt-4">
          <Typography variant="small" className="text-gray-600">
            Já possui uma conta?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Faça login
            </a>
          </Typography>
        </section>
      </motion.section>
    </>
  );
}
