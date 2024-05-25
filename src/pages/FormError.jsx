import { motion } from "framer-motion";
import Error from "../components/ContactForm/Error";

export default function FormError() {
  return (
    <motion.section
      className="form-error"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Error />
    </motion.section>
  );
}
