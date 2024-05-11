import { useRef } from "react";
import "./contactForm.scss";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const form = useRef();
  const navigate = useNavigate();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pvc4zid",
        "template_ci516wp",
        form.current,
        "2lA4WKDLN-93ub3TU"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          navigate("/thanks");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  }

  return (
    <section className="contact-form">
      <div className="container">
        <div className="text">
          <h2>Contact me</h2>
          <p>
            I&apos;m excited to connect with innovative companies and explore
            opportunities that align with my skills and passion for technology.
            Please feel free to reach out to discuss how I can contribute to
            your team&apos;s success.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="NAME" required />
          <input type="email" name="email" placeholder="EMAIL" required />
          <textarea
            name="message"
            placeholder="MESSAGE"
            required
            rows={5}
          ></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  );
}
