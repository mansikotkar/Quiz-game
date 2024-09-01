import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

//This Componet Work As HomePage
function HomePage() {
  let ridireact = useNavigate();

  const start_game = () => {
    window.localStorage.setItem("right_Answer_count", JSON.stringify(0));
    window.localStorage.setItem("Total_number_of_question", JSON.stringify(1));
    ridireact("/question");
  };

  return (
    <>
      <div
        style={{
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid black',
        padding: '20px',
        width: '300px',
        height: '150px', 
        marginTop: '200px',
        marginLeft: '500px',
        }}
      >
        <h1>QUIZ GAME</h1>
        <Button variant="contained" onClick={start_game}  style={{ marginTop: '10px' }}>
          START
        </Button>
      </div>
    </>
  );
}

export default HomePage;
