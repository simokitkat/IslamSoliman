import { motion } from "framer-motion";
import FormError from "../components/ContactForm/FormError";

export default function FormErrorPage() {
  return (
    <motion.section
      className="form-error"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FormError />
    </motion.section>
  );
}
