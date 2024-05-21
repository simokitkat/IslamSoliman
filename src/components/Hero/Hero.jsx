import { Link } from "react-router-dom";
import "./hero.scss";
import me from "../../assets/images/me.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <motion.div
          className="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, type: "spring", duration: 1.5 }}
        >
          <h1>
            Nice to meet you! I&apos;m <span>Islam Soliman</span>.
          </h1>
          <p>
            Based in Belarus, I&apos;m a front-end developer passionate about
            building accessible web apps that users love.
          </p>
          <Link to="contact">CONTACT ME</Link>
        </motion.div>
        <div className="image">
          <motion.img
            src={me}
            alt="my-photo"
            className="me"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 1.5 }}
          />
        </div>
      </div>
    </section>
  );
}
