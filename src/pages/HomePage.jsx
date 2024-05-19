import { motion } from "framer-motion";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";

export default function HomePage() {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Hero />
      <Skills />
    </motion.section>
  );
}
