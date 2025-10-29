"use client";

import { Formik, Form, ErrorMessage } from "formik";
import { cadastroSchema } from "@/Schemas/cadastroSchema";
import { Input, Button, Select, Option, Typography } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
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
      {/* 🔹 Imagem com texto sobreposto e animação leve */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: "url('/imagens/hero.jpg')" }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

        {/* Texto animado sobre a imagem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col text-white px-4 pt-4"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Espalhe conhecimento e solidariedade 📚
          </h2>
          <p className="text-sm mb-3 max-w-md">
            Faça parte dessa corrente do bem — conecte-se como doador ou receptor!
          </p>
        </motion.div>
      </section>

      {/* 🔹 Formulário */}
      <section className="max-w-md mx-auto -mt-16 bg-white p-6 rounded-t-3xl shadow-lg relative z-20">
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

            {/* Separador antes das opções sociais */}
            <div className="flex items-center my-3">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-2 text-gray-500 text-sm">ou</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <div className="flex flex-col gap-2">
              {/* Google */}
              <Button variant="outlined" className="flex items-center justify-center gap-2">
                <FcGoogle size={22} /> Entrar com Google
              </Button>

              {/* Facebook */}
              <Button variant="outlined" className="flex items-center justify-center gap-2 text-blue-600">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                  alt="Facebook"
                  className="w-5 h-5"
                />
                Entrar com Facebook
              </Button>
            </div>



            </Form>
          )}
        </Formik>

        <section className="text-center mt-4">
          <Typography variant="small" className="text-gray-600">
            Já possui uma conta?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Faça login
            </Link>
          </Typography>
        </section>
      </section>
    </>
  );
}
