import React from "react";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://web.whatsapp.com/send/?phone=917229912333&text&type=phone_number&app_absent=0" // full number with country code, no plus or spaces
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppIcon;
