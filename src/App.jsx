import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [student, setStudent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setStudent({
      name: name,
      marks: marks,
      result: marks >= 30 ? "Pass" : "Fail"
    });
  };

  return (
    <div>
      <h2>Student Marks Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Student Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <label>Marks: </label>
        <input
          type="number"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {student && (
        <div>
          <h3>Student Details</h3>
          <p>Name: {student.name}</p>
          <p>Marks: {student.marks}</p>
          <p>Result: {student.result}</p>
        </div>
      )}
    </div>
  );
}

export default App
