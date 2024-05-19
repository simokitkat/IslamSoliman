import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContactForm />
    </motion.div>
  );
}
