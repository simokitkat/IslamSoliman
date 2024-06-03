import { motion } from "framer-motion";
import Error from "../components/Error/Error";

export default function ErrorPage() {
  return (
    <motion.div
      className="error"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Error />
    </motion.div>
  );
}
