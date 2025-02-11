import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Rock Paper Scissors</h1>
      <div>
        <button style={buttonStyle}>Rock</button>
        <button style={buttonStyle}>Paper</button>
        <button style={buttonStyle}>Scissors</button>
      </div>
      <h2>You Chose: None</h2>
      <h2>Computer Chose: None</h2>
      <h2>Result: No game played</h2>
    </div>
  );
}

const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "18px",
  cursor: "pointer",
};

export default App;
