import React from "react";
import "./contact.css"
import Footer from "./Footer";

function Contact() {
  return (
    <div className="contact-page">
      <div className="container">
        <h2>Contact Us</h2>
        <form
          action="mailto:priyanshutrivedi792@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            defaultValue={""}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
