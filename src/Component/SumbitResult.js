import { Button } from "@mui/material";
import React, { useState } from "react";
import Result from "./Instant_Result";

function Sumbit_result({ right_answer, checked }) {
  let right_answer_counter = localStorage.getItem("right_Answer_count");
  right_answer_counter = JSON.parse(right_answer_counter);
  const [show_result_1, set_Show_result] = useState(false);

  //Work on validation
  const Check_the_result = () => {
    if (checked.length == 0) {
      alert("Select one Option");
    } else {
      set_Show_result(true);
      if (right_answer == checked) {
        localStorage.setItem(
          "right_Answer_count",
          JSON.stringify(right_answer_counter + 1)
        );
      }
    }
  };

  return (
    <>
      <Button
        style={{ margin: "10px" }}
        variant="contained"
        disabled={show_result_1}
        onClick={Check_the_result}
      >
        Sumbit
      </Button>
      <Result
        show_result_1={show_result_1}
        right_answer={right_answer}
        checked={checked}
        set_Show_result={set_Show_result}
      />
    </>
  );
}

export default Sumbit_result;
