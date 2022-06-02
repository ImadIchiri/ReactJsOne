import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="title">Home</div>
      <p className="myP">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic,
        quae amet perspiciatis tempore incidunt alias et maxime architecto qui
        corrupti velit vel laudantium accusantium quisquam aperiam? Eum, maxime
        velit.
      </p>
      <nav className="MyNav">
        <Link to="/about">About</Link>
        <Link to="/people">People</Link>
      </nav>
    </>
  );
};

export default Home;
