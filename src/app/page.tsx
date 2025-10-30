"use client";

import { motion } from "framer-motion";

// Componentes Mobile
import HeroMobile from "@/components/HeroMob/Hero";
import SecaoEventosMobile from "@/components/SecaoEventosMob/SecaoEventos";
import SecaoInstituicoesProximasMobile from "@/components/SecaoInstituicoesProximasMob/InstituicoesProximas";
import SecaoSobreMobile from "@/components/SecaoSobreMob/SecaoSobre";
import SecaoFAQMobile from "@/components/SecaoFAQMob/SecaoFAQ";
import FooterMobile from "@/components/FooterMob/Footer";

import { eventos } from "@/data/eventos";

export default function Home() {
  const sectionAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main>
      {/* ===== MOBILE ===== */}
      <div className="block sm:block md:hidden lg:hidden xl:hidden">
        <motion.div initial="hidden" animate="visible" variants={sectionAnimation}>
          <HeroMobile />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={sectionAnimation} transition={{ delay: 0.1 }}>
          <SecaoInstituicoesProximasMobile />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={sectionAnimation} transition={{ delay: 0.2 }}>
          <SecaoEventosMobile eventos={eventos} />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={sectionAnimation} transition={{ delay: 0.3 }}>
          <SecaoSobreMobile />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={sectionAnimation} transition={{ delay: 0.4 }}>
          <SecaoFAQMobile />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={sectionAnimation} transition={{ delay: 0.5 }}>
          <FooterMobile />
        </motion.div>
      </div>

    </main>
  );
}
