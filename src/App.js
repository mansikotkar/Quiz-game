import './App.css';
import { Route, Routes } from 'react-router-dom';
import Question_answer from './Component/Question_answer';
import Final_result from './Component/FinalResult';
import HomePage from './Component/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/question' element={<Question_answer/>} />
      <Route path='/finalresult' element={<Final_result/>}/>
    </Routes>
  );
}

export default App;
