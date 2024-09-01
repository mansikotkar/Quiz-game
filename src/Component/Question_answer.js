import React, { createContext, useEffect, useState } from "react";
import Options from "./Options";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//useContext are used to send api Data on nested component
const UserContext = createContext();

//Component Work on Api Call
function Question_answer() {
  let Total_number_of_question = localStorage.getItem(
    "Total_number_of_question"
  );
  let nav = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://opentdb.com/api.php?amount=1");
      setData(response?.data);
    } catch (err) {
      if (err?.response?.status === 429) {
        nav("/question");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {data?.results?.map((ele) => {
        return (
          <>
            <div style={{display: 'flex'}} >
              <span>
                <h2 style={{marginLeft:"2px"}}>{Total_number_of_question}. </h2>
              </span>
              <span>
                {/* regex used for remove special character from question */}
                <h2 style={{marginLeft:"5px"}}>{ele?.question.replace(/[^a-zA-Z0-9 ]/g, "")} ?</h2>
              </span>
            </div>
          </>
        );
      })}
      <UserContext.Provider value={fetchData}>
        <Options data={data?.results} fetchData={fetchData} />
      </UserContext.Provider>
    </>
  );
}

export default Question_answer;
export { UserContext };
