import { motion } from "framer-motion";
import Thanks from "../components/Thanks/Thanks";

export default function ThankYouPage() {
  return (
    <motion.section
      className="thanks"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Thanks />
    </motion.section>
  );
}
