import { Link } from "react-router-dom";
import "./hero.scss";
// import rings from "../../assets/images/pattern-rings.svg";
import me from "../../assets/images/me.png";
export default function Hero() {
  return (
    <div className="hero">
      {/* <img src={rings} alt="rings-svg" className="rings" /> */}
      <div className="container">
        <div className="text">
          <h1>
            Nice to meet you! I&apos;m <span>Islam Soliman</span>.
          </h1>
          <p>
            Based in Belarus, I&apos;m a front-end developer passionate about
            building accessible web apps that users love.
          </p>
          <Link to="contact">CONTACT ME</Link>
        </div>
        <div className="image">
          <img src={me} alt="my-photo" className="me" />
        </div>
      </div>
    </div>
  );
}
