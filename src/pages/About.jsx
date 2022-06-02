import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="title">About</div>
      <p className="myP">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
        suscipit odio nisi, ut tempore dolores porro perferendis corrupti
        dolorum alias, veniam error itaque? Dolorum itaque quo porro numquam,
        eum tenetur!
      </p>
      <nav className="MyNav">
        <Link to="/home">Home</Link>
        <Link to="/people">People</Link>
      </nav>
    </>
  );
};

export default About;
