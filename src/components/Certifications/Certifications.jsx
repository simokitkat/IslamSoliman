import { motion } from "framer-motion";
import { certificatesData } from "../../utils/CertificatesData";
import Certificate from "./Certificate";
import "./certifications.scss";

const certificatesH2Variants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.5,
    },
  },
};

const certificatesPVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.5,
    },
  },
};

const certificatesGridVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 2,
    },
  },
};

export default function Certifications() {
  return (
    <section className="certifications">
      <div className="container">
        <div className="text">
          <motion.h2
            variants={certificatesH2Variants}
            initial="hidden"
            animate="visible"
          >
            Certificates
          </motion.h2>
          <motion.p
            variants={certificatesPVariants}
            initial="hidden"
            animate="visible"
          >
            Although I believe that the ability to code is what truly matters,
            I&apos;m proud to showcase these certificates as a testament to my
            dedication and perseverance in continuously improving my skills.
          </motion.p>
        </div>
        <motion.div
          className="certifications-grid"
          variants={certificatesGridVariants}
          initial="hidden"
          animate="visible"
        >
          {certificatesData.map((certificate) => {
            return <Certificate {...certificate} key={certificate.name} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}
