import React from "react";
import "./index.css"

function Footer() {
  return (
    <div>
      <footer className="footer">
        <h6>TextConverter </h6>
        <p className="m-0">©{new Date().getFullYear()} PRIYANSHU TRIVEDI</p>
      </footer>
    </div>
  );
}

export default Footer;
