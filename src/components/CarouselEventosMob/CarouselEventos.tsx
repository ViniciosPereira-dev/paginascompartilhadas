"use client";
import { Carousel, Card, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import styles from "./CarouselEventos.module.css"

export default function CarouselEventos({ eventos }) {
  return (
    <Carousel
      loop
      autoplay
      autoplayDelay={5000}
      className="rounded-3xl shadow-xl overflow-hidden"
      transition={{ type: "spring", duration: 0.8 }}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-3">
          {Array.from({ length }).map((_, i) => (
            <span
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`block h-2 cursor-pointer rounded-full transition-all ${
                activeIndex === i ? "w-8 bg-white" : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    >
      {eventos.map((evento) => (
        <Card
          key={evento.id}
          className="relative h-[475px] w-full overflow-hidden rounded-3xl"
        >
          {/* Imagem com leve zoom-in e overlay gradiente */}
          <img
            src={evento.imagem}
            alt={evento.titulo}
            className="h-full w-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
            <Typography
              variant="h4"
              className="font-bold tracking-wide drop-shadow-md mb-2 text-center"
            >
              {evento.titulo}
            </Typography>
            <Typography className="text-gray-200 text-sm mb-5 tracking-wide text-center">
              {evento.data}
            </Typography>

            <div className="">
              <Link href={`/eventos/${evento.id}`}>
                <div className={styles.btnContainer}>
                <Button
                  size="sm"
                  color="white"
                  className={styles.btnAnimated}
                >
                  Ver detalhes
                </Button>                  
                </div>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </Carousel>
  );
}
