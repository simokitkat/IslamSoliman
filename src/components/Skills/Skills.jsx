import { Link } from "react-router-dom";
import "./skills.scss";
import { skillsData } from "../../utils/skillsData";

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <div className="top">
          <h2>Skills</h2>
          <Link to="projects">Check out my projects</Link>
        </div>
        <div className="tech-stacks">
          {skillsData.map((skill) => {
            return (
              <div className="skill" key={skill.name}>
                <h3>{skill.name.toUpperCase()}</h3>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={skill.name.toLowerCase()}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
