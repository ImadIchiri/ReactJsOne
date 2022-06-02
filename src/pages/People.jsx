import React from "react";
import { Link } from "react-router-dom";
import Todo from "../components/Todo";

const People = () => {
  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setPeople(json);
      });
  }, [people]);

  return (
    <div className="container">
      <nav className="MyNav">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="row justify-content-center p-3">
        <div className="title">People --{people.length}--</div>
        {people.length &&
          people.map((p, i) => (
            <Todo
              key={i}
              userId={p.userId}
              title={p.title}
              id={p.id}
              completed={p.completed === true ? "true" : "false"}
            />
          ))}
      </div>
    </div>
  );
};

export default People;
