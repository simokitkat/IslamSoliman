import { motion } from "framer-motion";
import Certifications from "../components/Certifications/Certifications";

export default function CertificatesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Certifications />
    </motion.div>
  );
}
