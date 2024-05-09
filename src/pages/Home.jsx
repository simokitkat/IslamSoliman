import { motion } from "framer-motion";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";

export default function Home() {
  return (
    <motion.section
      className="home"
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Skills />
    </motion.section>
  );
}
