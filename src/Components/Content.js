import React from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

function Content(props) {
  // console.log(props.course.parts);
  return (
    <div>
      <Part1 props={props.course.parts} />
      <Part2 props={props.course.parts} />
      <Part3 props={props.course.parts} />
    </div>
  );
}

export default Content;
