import React from "react";
import "./About.css";
import Footer from "../Footer";

import image from "./priyanshu.jpeg"
function About() {
  return (
    <div className="about p-5">
      <div className="container">
        <div className="MAIN-CLASS">
          <h1>About Us</h1>
         
        </div>
        <img src={image}  alt="about image" />

        <p>
          I'm Priyanshu, a BCA student from India with a fervent zeal for full
          stack development. My journey in the tech world is fueled by my love
          for coding and my commitment to mastering the craft.  I
          embarked on this exciting path as a curious learner, eager to
          understand the nuts and bolts of web development.I've honed my skills in the MERN stack, embracing the
          intricacies of MongoDB, Express.js, React, and Node.js.
        
          **TEXTCONVERTER** project - where productivity meets simplicity.
        </p>
        <p>
          Coding is more than just typing lines of code; it's a way to solve
          problems, express creativity, and make ideas come to life. Every
          function I write and every bug I squash takes me one step closer to
          becoming the developer I aspire to be. ### Let's Connect If you're
          intrigued by my work or share a similar passion for development, let's
          connect! I'm always open to collaborating on projects, sharing
          knowledge, and growing together in this ever-evolving field of
          technology. --- Thank you for visiting, and don't forget to check out
          my profile
        </p>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default About;
