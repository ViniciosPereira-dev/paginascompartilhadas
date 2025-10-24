"use client";
 
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
 
export const cadastroSchema = Yup.object({
  tipoUsuario: Yup.string().required("Selecione o tipo de usuário"),
 
  nome: Yup.string()
    .required("Informe o nome completo")
    .min(3, "Nome muito curto"),
 
    email: Yup.string()
    .required("Informe o e-mail")
    .email("E-mail inválido"),
 
    cpfCnpj: Yup.string()
    .required("Informe o CPF ou CNPJ")
    .matches(/^(?:\d{11}|\d{14})$/, "CPF deve ter 11 dígitos ou CNPJ 14"),
 
    endereco: Yup.string().required("Informe o endereço"),
});