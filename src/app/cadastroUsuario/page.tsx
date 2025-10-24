'use client'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { cadastroSchema } from "@/schemas/cadastroSchema";
 
export default function CadastroUsuario() {
  return (
    <div className="p-6 max-w-md mx-auto bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Cadastro de Usuário</h2>
 
      <Formik
        initialValues={{
          tipoUsuario: "",
          nome: "",
          email: "",
          cpfCnpj: "",
          endereco: "",
        }}
        validationSchema={cadastroSchema}
        onSubmit={(values) => {
          console.log("Dados enviados:", values);
          alert("Cadastro realizado com sucesso!");
        }}
      >
        {() => (
          <Form className="flex flex-col gap-4">
            {/* Tipo de usuário */}
            <label className="font-medium">Tipo de usuário</label>
            <Field
              as="select"
              name="tipoUsuario"
              className="border p-2 rounded"
            >
              <option value="">Selecione</option>
              <option value="doador">Doador</option>
              <option value="recebedor">Recebedor</option>
              <option value="ambos">Ambos</option>
            </Field>
            <ErrorMessage component="p" className="text-red-600 text-sm" name="tipoUsuario" />
 
            {/* Nome */}
            <label className="font-medium">Nome completo</label>
            <Field
              type="text"
              name="nome"
              className="border p-2 rounded"
              placeholder="Seu nome completo"
            />
            <ErrorMessage component="p" className="text-red-600 text-sm" name="nome" />
 
            {/* Email */}
            <label className="font-medium">E-mail</label>
            <Field
              type="email"
              name="email"
              className="border p-2 rounded"
              placeholder="email@exemplo.com"
            />
            <ErrorMessage component="p" className="text-red-600 text-sm" name="email" />
 
            {/* CPF/CNPJ */}
            <label className="font-medium">CPF/CNPJ</label>
            <Field
              type="text"
              name="cpfCnpj"
              className="border p-2 rounded"
              placeholder="Somente números"
            />
            <ErrorMessage component="p" className="text-red-600 text-sm" name="cpfCnpj" />
 
            {/* Endereço */}
            <label className="font-medium">Endereço</label>
            <Field
              as="textarea"
              name="endereco"
              className="border p-2 rounded"
              placeholder="Rua, número, bairro..."
            />
            <ErrorMessage component="p" className="text-red-600 text-sm" name="endereco" />
 
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Cadastrar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
 