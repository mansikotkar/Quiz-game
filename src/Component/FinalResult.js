import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

//This Component Show the OverAll Result Of Game
//1.Total Number of question Serve
//2.Total Number Of Right Answers
//3.Total Number Of Wrong Answers

function FinalResult() {
  let RightAanswerCount = localStorage.getItem("right_Answer_count"); //Get Total number of Right Answers
  RightAanswerCount = JSON.parse(RightAanswerCount);

  // Reirect the page to Home page
  let reDireact = useNavigate();
  const StartNewGame = () => {
    reDireact("/");
  };

  return (
    <>
      <div className="container-finalresult">
        <h1>Final Result</h1>
        <p>
          Total Questions served: <span className="count">10</span>
        </p>
        <p className="correct">
          Total Right answers:{" "}
          <span className="count">{RightAanswerCount}</span>
        </p>
        <p className="wrong">
          Total Wrong answers:{" "}
          <span className="count">{10 - RightAanswerCount}</span>
        </p>
        <Button
          variant="contained"
          onClick={StartNewGame}
          style={{ marginTop: "10px", marginBottom: "15px" }}
        >
          New Game
        </Button>
      </div>
    </>
  );
}

export default FinalResult;
