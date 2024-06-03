import { useRef } from "react";
import "./contactForm.scss";
// import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendingEmail } from "../../features/formSlice";
import FormIsLoading from "./FormIsLoading";
import OtherContacts from "./OtherContacts";

export default function ContactForm() {
  const formElement = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.form);

  function handleFormSubmission(e) {
    e.preventDefault();

    dispatch(sendingEmail({ formElement: formElement.current, navigate }));

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
        <div className="contact-details">
          {isLoading ? (
            <>
              <OtherContacts />
              <FormIsLoading />
            </>
          ) : (
            <>
              <OtherContacts />
              <form onSubmit={handleFormSubmission} ref={formElement}>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}
