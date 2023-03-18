import React from 'react';
import Home from './components/homeComponent';
import Quiz from './components/quizComponent';
import Result from './components/resultComponent';
import {Link, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
     <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/quiz' element={<Quiz />}></Route>
        <Route path='/result' element={<Result />}></Route>
    </Routes>
               
   </>
  );
}

export default App;
