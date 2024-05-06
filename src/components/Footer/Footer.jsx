import { Email, FrontendMentor, Github, Linkedin, Phone } from "../SVGs/SVGs";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <h2>
          <span>Islam</span> <span>Soliman</span>
        </h2>
        <ul className="socials">
          <li>
            <a href="https://github.com/simokitkat" target="_blank">
              <Github />
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/profile/simokitkat"
              target="_blank"
            >
              <FrontendMentor />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/islamsoliman92/"
              target="_blank"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="emailto:simokitkat@yahoo.com">
              <Email />
            </a>
          </li>
          <li>
            <a href="tel:+375(29) 368-35-78">
              <Phone />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
