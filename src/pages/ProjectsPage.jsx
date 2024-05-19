import { motion } from "framer-motion";
import Projects from "../components/Projects/Projects";

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Projects />
    </motion.div>
  );
}
