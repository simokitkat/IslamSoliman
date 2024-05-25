import { motion } from "framer-motion";

const loadingVariants = {
  visible: {
    color: ["#d9d9d9", "#4ee1a0", "#d9d9d9"],
    transition: { duration: 1, repeat: Infinity },
  },
};

export default function FormIsLoading() {
  return (
    <motion.div
      className="form-is-loading"
      animate="visible"
      variants={loadingVariants}
    >
      <h3>Submitting...</h3>
      <p>Please wait while your request is being processed.</p>
    </motion.div>
  );
}
