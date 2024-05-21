import { Link } from "react-router-dom";
import "./skills.scss";
import { skillsData } from "../../utils/skillsData";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <div className="top">
          <h2>Skills</h2>
          <Link to="projects">Check out my projects</Link>
        </div>
        <div className="tech-stacks">
          {skillsData.map((skill, i) => {
            return (
              <motion.div
                className="skill"
                key={skill.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "spring", duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3>{skill.name.toUpperCase()}</h3>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={skill.name.toLowerCase()}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
