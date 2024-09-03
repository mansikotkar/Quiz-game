import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { UserContext } from "./QuestionAnswer";
import { useNavigate } from "react-router-dom";

//This Componet load The Instant Result Of Single Quiz
//Show the User select Right or Wrong Answer

function Result({ show_result_1, right_answer, checked, set_Show_result }) {
  const fetchData = useContext(UserContext);
  let TotalQuestions = localStorage.getItem("Total_number_of_question");
  TotalQuestions = JSON.parse(TotalQuestions);
  let ridireact = useNavigate();

  //Function Work on Next Question of Quiz
  const NextQuestion = () => {
    if (TotalQuestions == "10") {
      localStorage.setItem("Total_number_of_question", JSON.stringify(0));
      ridireact("/finalresult");
    } else {
      localStorage.setItem(
        "Total_number_of_question",
        JSON.stringify(TotalQuestions + 1)
      );
      set_Show_result(false);
      fetchData();
    }
  };

  const styles = {
    color: right_answer == checked ? "green" : "red",
  };
  
  return (
    <div>
      <Dialog
        open={show_result_1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <h3>Right Answer: {right_answer}</h3>
          <h3 style={styles}>Your answer: {checked}</h3>
        </DialogContent>
        <Button variant="contained" onClick={NextQuestion}>
          {TotalQuestions == "10" ? "Sumbit" : "Next Question"}
        </Button>
      </Dialog>
    </div>
  );
}
export default Result;
