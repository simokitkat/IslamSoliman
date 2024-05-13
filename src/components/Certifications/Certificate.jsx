/* eslint-disable react/prop-types */
export default function Certificate({ link, image, name }) {
  return (
    <a href={link} target="_blank" className="certificate">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </a>
  );
}
