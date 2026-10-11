
import React from "react";

function Student(props) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {props.name}</p>
      <p>Department: {props.department}</p>
    </div>
  );
}

export default Student;
