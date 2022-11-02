import React from "react";

function Part2(props) {
  const arry = props.props[1];

  return (
    <div>
      <ul>
        <li> Name: {arry.name}</li>
        <li>Exercises: {arry.exercises}</li>
      </ul>
      {/* {arry.map((data) => {
        return (
          <ul>
            <li> Name: {data.name}</li>
            <li>Exercises: {data.exercises}</li>
          </ul>
        );
      })} */}
    </div>
  );
}

export default Part2;
