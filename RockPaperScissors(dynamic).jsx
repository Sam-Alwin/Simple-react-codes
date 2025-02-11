import React, { useState } from "react";

function App() {
  const choices = ["Rock", "Paper", "Scissors"];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a Tie!");
    } else if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Scissors" && computer === "Paper") ||
      (user === "Paper" && computer === "Rock")
    ) {
      setResult("You Win! 🎉");
    } else {
      setResult("Computer Wins! 💻");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Rock Paper Scissors</h1>
      <div>
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => playGame(choice)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            {choice}
          </button>
        ))}
      </div>
      {userChoice && (
        <div style={{ marginTop: "20px" }}>
          <h2>You Chose: {userChoice}</h2>
          <h2>Computer Chose: {computerChoice}</h2>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
