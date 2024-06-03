import { useState } from "react";
import {
  Email,
  Github,
  Linkedin,
  Phone,
  Telegram,
  Viber,
  Whatsapp,
} from "../SVGs/SVGs";

const otherContacts = [
  {
    name: "Phone",
    icon: <Phone />,
    data: "+375 29 368-35-78",
    isClicked: true,
  },
  {
    name: "Email",
    icon: <Email />,
    data: "simokitkat@yahoo.com",
    isClicked: false,
  },
  {
    name: "Whatsapp",
    icon: <Whatsapp />,
    data: "+375 29 368-35-78",
    isClicked: false,
  },
  {
    name: "Telegram",
    icon: <Telegram />,
    data: "@Simo_JS",
    isClicked: false,
  },
  {
    name: "Viber",
    icon: <Viber />,
    data: "+375 29 368-35-78",
    isClicked: false,
  },
  {
    name: "Github",
    icon: <Github />,
    data: "https://github.com/simokitkat",
    isClicked: false,
    isLink: true,
  },
  {
    name: "Linkedin",
    icon: <Linkedin />,
    data: "https://www.linkedin.com/in/islamsoliman92/",
    isClicked: false,
    isLink: true,
  },
];

export default function OtherContacts() {
  const [contactData, setContactData] = useState({
    data: "+375 29 368-35-78",
    isLink: false,
    name: "",
  });

  function handleShowingData(name) {
    const social = otherContacts.find((element) => element.name === name);
    otherContacts.map((element) => (element.isClicked = false));
    social.isClicked = true;
    setContactData({
      data: social.data,
      isLink: social.isLink,
      name: social.name,
    });
  }

  return (
    <>
      <ul className="other-contacts">
        {otherContacts.map((contact) => {
          return (
            <li
              key={contact.name}
              onClick={() => handleShowingData(contact.name)}
              className={contact.isClicked ? "active" : ""}
            >
              <span>{contact.icon}</span>
              <span>{contact.name}</span>
            </li>
          );
        })}
      </ul>
      <p className="data">
        {contactData.isLink ? (
          <a href={contactData.data} target="_blank">
            {contactData.name} Link
          </a>
        ) : (
          contactData.data
        )}
      </p>
    </>
  );
}
