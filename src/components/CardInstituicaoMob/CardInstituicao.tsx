import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { MapPin } from "lucide-react";

export default function CardInstituicao({ inst }) {
  return (

  <div className="flex flex-column items-center">

    <Card className="w-80 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* IMAGEM */}
      <CardHeader floated={false} shadow={false} className="h-56">
        <img
          src={inst.imagem}
          alt={inst.nome}
          className="h-full w-full object-cover rounded-t-xl"
        />
      </CardHeader>

      {/* CONTEÚDO */}
      <CardBody>

        <div className="mb-2 flex items-center justify-between">
          <Typography variant="h6" color="blue-gray" className="font-semibold">
            {inst.nome}
          </Typography>
          <Typography className="text-sm text-blue-gray-600 flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {inst.distancia}
          </Typography>
        </div>

        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-80"
        >
          {inst.descricao}
        </Typography>
      </CardBody>

      {/* BOTÃO */}
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth
          className="bg-blue-500 text-white shadow-none hover:scale-105 hover:shadow-md focus:scale-105 active:scale-100 transition-transform"
        >
          Ver Perfil
        </Button>
      </CardFooter>
    </Card>         

  </div>


  );
}
