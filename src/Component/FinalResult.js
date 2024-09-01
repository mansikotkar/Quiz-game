import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

//This Component Show the OverAll Result Of Game
//1.Total Number of question Serve
//2.Total Number Of Right Answers
//3.Total Number Of Wrong Answers

function Final_result() {

  let RightAanswerCount = localStorage.getItem("right_Answer_count");//Get Total number of Right Answers
  RightAanswerCount = JSON.parse(RightAanswerCount);
  
  // Reirect the page to Home page
  let reDireact = useNavigate();
  const StartNewGame = () => {
    reDireact("/");
  };

  return (
    <>
     <div  style={{
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        border: '3px solid black',
        padding: '150px',
        height: '50px', 
        marginLeft:'250px',
        marginRight:'250px',
        marginTop:'100px'
        }}>
        <h1>Final Result</h1>
      <h2>Total Question served : 10</h2>
      <h2 style={{ color: "green" }}>
        Total Right answer : {RightAanswerCount}
      </h2>
      <h2 style={{ color: "red" }}>
        Total wrong answer:{10 - RightAanswerCount}
      </h2>
      <Button variant="contained" onClick={StartNewGame} style={{marginTop:"10px", marginBottom:"15px"}}>
        New Game
     </Button>
     </div>
    </>
  );
}

export default Final_result;
