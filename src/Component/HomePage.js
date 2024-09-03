import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

//This Componet Work As HomePage
function HomePage() {
  let ridireact = useNavigate();

  const startGame = () => {
    window.localStorage.setItem("right_Answer_count", JSON.stringify(0));
    window.localStorage.setItem("Total_number_of_question", JSON.stringify(1));
    ridireact("/question");
  };

  return (
    <>
      <div className="quiz-container">
        <div className="quiz-box">
          <h1 className="quiz-title">QUIZ GAME</h1>
          <Button
            variant="contained"
            onClick={startGame}
            style={{ marginTop: "10px" }}
          >
            START
          </Button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
