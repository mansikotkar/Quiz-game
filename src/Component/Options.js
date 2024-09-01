import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Sumbit_result from "./SumbitResult";
let select_deselect_option = [];


//This Component load The Options of Quizz

function Options({
  data,
  show_right_answer,
}) {
  const [checked, setChecked] = useState([]);
  const [options_with_include_right_option,set_options_with_include_right_option] = useState();//Store the All right and wrong option 
  const [right_answer, set_right_answer] = useState("");//Store the Right option(answer)
  const randomNumber = Math.floor(Math.random() * 4);//Genrate random number 


  useEffect(() => {
    GenrateFinalOptions();
  }, [data]);

  //Genrate Array include Right Option
  const GenrateFinalOptions = () => {
    const options_array = [];
    data?.map((ele) => {
      set_right_answer(ele?.correct_answer);
      ele?.incorrect_answers?.map((incorrectOption) => {
        options_array.push(incorrectOption);
      });
      options_array.splice(randomNumber, 0, ele?.correct_answer);
      set_options_with_include_right_option(options_array);
    });
  };

  //Work on select/deselect
  const handleChange = (event) => {
    select_deselect_option = [...checked];
    if (event.target.checked) {
      select_deselect_option = [...checked, event.target.value];
    } else {
      select_deselect_option.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(event.target.value);
  };

  return (
    <>
      {options_with_include_right_option?.map((options) => {
        return (
          <>
            <div>
              <span>
                <Checkbox
                  checked={checked.includes(options)}
                  value={options}
                  onChange={(event) => handleChange(event)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </span>
              <span>{options}</span>
            </div>
          </>
        );
      })}
      <Sumbit_result
        right_answer={right_answer}
        checked={checked}
        show_right_answer={show_right_answer}
      />
    </>
  );
}

export default Options;
