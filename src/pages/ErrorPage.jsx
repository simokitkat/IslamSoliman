import { motion } from "framer-motion";

export default function ErrorPage() {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      404 Page Not Found
    </motion.h2>
  );
}
