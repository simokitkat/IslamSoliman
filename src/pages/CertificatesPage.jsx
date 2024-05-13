import { motion } from "framer-motion";
import Certifications from "../components/Certifications/Certifications";

export default function CertificatesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Certifications />
    </motion.div>
  );
}
