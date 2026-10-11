
import React from "react";

function App() {
  const students = [
    "Gnapika",
    "jyoshna",
    "Akhila",
    "Nandhu",
    "Poori"
  ];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
