import { motion } from "framer-motion";
import Thanks from "../components/Thanks/Thanks";

export default function ThankYou() {
  return (
    <motion.section
      className="thanks"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Thanks />
    </motion.section>
  );
}
