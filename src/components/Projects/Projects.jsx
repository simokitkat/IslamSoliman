import { projectsData } from "../../utils/ProjectsData";
import Project from "./Project";
import "./projects.scss";
export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <div className="text">
          <h2>Projects</h2>
          <p>
            Here are some of my favorite projects, showcasing my skills and
            creativity in coding. Each project is a reflection of my dedication
            to crafting innovative solutions that make a difference.
          </p>
        </div>
        <div className="projects-grid">
          {projectsData.map((project) => {
            return <Project {...project} key={project.name} />;
          })}
        </div>
      </div>
    </section>
  );
}
