import React from "react";

const Todo = ({ userId, title, id, completed }) => {
  return (
    <>
      <div className="card  col-lg-5 m-3 p-3 text-start">
        <h1>Id: {id}</h1>
        <h1>UserId: {userId}</h1>
        <h1>Title: {title}</h1>
        <h1>Completed: {completed}</h1>
      </div>
    </>
  );
};

export default Todo;
