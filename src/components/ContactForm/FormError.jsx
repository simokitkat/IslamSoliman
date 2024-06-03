import { useEffect } from "react";
import OtherContacts from "./OtherContacts";
import "./form-error.scss";

export default function FormError() {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "#form-error";
    link.click();
  }, []);

  return (
    <div className="container">
      <h2 id="form-error">Oops, Form Submission Error!</h2>
      <p>
        It&apos;s possible that the form submission failed due to a technical
        issue. Please try resubmitting the form or contact me directly using the
        contact information below.
      </p>
      <OtherContacts />
    </div>
  );
}
