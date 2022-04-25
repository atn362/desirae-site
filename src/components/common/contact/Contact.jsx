import React from "react";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <section className="phone-number">
        <a href="tel:555-555-5555">Contact By Phone</a>
      </section>
      <section className="email-address">
        <a href="mailto:name@email.com">Contact By Email</a>
      </section>
    </section>
  );
}
export default Contact;
