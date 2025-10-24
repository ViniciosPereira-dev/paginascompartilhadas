"use client"

import { Typography, Card } from "@material-tailwind/react";

export default function TabelaLivros({ livros = [] }) {
  const HEAD = ["Título", "Autor", "Gênero", "Ano", "Editora"];

  if (!livros || livros.length === 0) {
    return (
      <Typography color="gray" className="text-sm mt-4">
        Nenhum livro encontrado.
      </Typography>
    );
  }

  return (
    <Card className="w-full max-w-4xl overflow-scroll mt-4 shadow-lg">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {livros.map((livro, index) => {
            const isLast = index === livros.length - 1;
            const classes = isLast
              ? "p-4"
              : "p-4 border-b border-blue-gray-50";

            return (
              <tr
                key={index}
                className="hover:bg-blue-gray-50/30 transition-colors"
              >
                <td className={classes}>{livro.titulo}</td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  {livro.autor}
                </td>
                <td className={classes}>{livro.genero}</td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  {livro.ano}
                </td>
                <td className={classes}>{livro.editora}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}