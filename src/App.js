import './App.css';
import { Route, Routes } from 'react-router-dom';
import QuestionAnswer from './Component/QuestionAnswer';
import Final_result from './Component/FinalResult';
import HomePage from './Component/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/question' element={<QuestionAnswer/>} />
      <Route path='/finalresult' element={<Final_result/>}/>
    </Routes>
  );
}

export default App;
