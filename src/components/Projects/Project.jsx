/* eslint-disable react/prop-types */
export default function Project({ name, image, githubLink, liveLink }) {
  return (
    <div className="project">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className="links">
        <a href={githubLink} target="_blank">
          Code on Github
        </a>
        <a href={liveLink} target="_blank">
          Live Website
        </a>
      </div>
    </div>
  );
}
