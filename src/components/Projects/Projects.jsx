import { motion } from "framer-motion";
import { projectsData } from "../../utils/ProjectsData";
import Project from "./Project";
import "./projects.scss";

const projectsH2Variants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.5,
    },
  },
};

const projectsPVariants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.5,
    },
  },
};

const projectsGridVariants = {
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

export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <div className="text">
          <motion.h2
            variants={projectsH2Variants}
            initial="hidden"
            animate="visible"
          >
            Projects
          </motion.h2>
          <motion.p
            variants={projectsPVariants}
            initial="hidden"
            animate="visible"
          >
            Here are some of my favorite projects, showcasing my skills and
            creativity in coding. Each project is a reflection of my dedication
            to crafting innovative solutions that make a difference.
          </motion.p>
        </div>
        <motion.div
          className="projects-grid"
          variants={projectsGridVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((project) => {
            return <Project {...project} key={project.name} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}
