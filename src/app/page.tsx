"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero/Hero";
import SecaoEventos from "@/components/SecaoEventos/SecaoEventos";
import SecaoInstituicoesProximas from "../components/SecaoInstituicoesProximas/InstituicoesProximas";
import SecaoSobre from "@/components/SecaoSobre/SecaoSobre";
import SecaoFAQ from "@/components/SecaoFAQ/SecaoFAQ";
import { Footer } from "@/components/Footer/Footer";
import {eventos} from "@/data/eventos";




export default function Home() {

  const sectionAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main>
      <motion.div initial="hidden" animate="visible" variants={sectionAnimation}>
        <Hero />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={sectionAnimation} transition={{ delay: 0.1 }}>
        <SecaoInstituicoesProximas />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={sectionAnimation} transition={{ delay: 0.2 }}>
        <SecaoEventos eventos={eventos} />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={sectionAnimation} transition={{ delay: 0.3 }}>
        <SecaoSobre />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={sectionAnimation} transition={{ delay: 0.4 }}>
        <SecaoFAQ />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={sectionAnimation} transition={{ delay: 0.5 }}>
        <Footer />
      </motion.div>
    </main>
  );
}
