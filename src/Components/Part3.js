import React from "react";

function Part3(props) {
  //   console.log(props.props[0]);
  const arry = props.props[2];
  return (
    <div>
      <ul>
        <li> Name: {arry.name}</li>
        <li>Exercises: {arry.exercises}</li>
      </ul>
    </div>
  );
}

export default Part3;
