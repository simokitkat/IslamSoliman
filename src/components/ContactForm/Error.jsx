import {
  Email,
  Linkedin,
  Phone,
  Telegram,
  Viber,
  Whatsapp,
} from "../SVGs/SVGs";
import "./error.scss";

const otherContacts = [
  {
    name: "Email",
    icon: <Email />,
    data: "simokitkat@yahoo.com",
  },
  {
    name: "Phone",
    icon: <Phone />,
    data: "+375 29 368-35-78",
  },
  {
    name: "Whatsapp",
    icon: <Whatsapp />,
    data: "+375 29 368-35-78",
  },
  {
    name: "Viber",
    icon: <Viber />,
    data: "+375 29 368-35-78",
  },
  {
    name: "Telegram",
    icon: <Telegram />,
    data: "@Simo_JS",
  },
  {
    name: "Linkedin",
    icon: <Linkedin />,
    data: "https://www.linkedin.com/in/islamsoliman92/",
  },
];

export default function Error() {
  return (
    <div className="container">
      <h2>Oops, Form Submission Error!</h2>
      <p>
        It&apos;s possible that the form submission failed due to a technical
        issue. Please try resubmitting the form or contact me directly using the
        contact information below.
      </p>
      <ul>
        {otherContacts.map((contact) => {
          return (
            <li key={contact.name}>
              {contact.icon}
              {contact.name}: {contact.data}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
