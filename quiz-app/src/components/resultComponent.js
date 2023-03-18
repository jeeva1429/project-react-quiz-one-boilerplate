import React , {Component, useContext} from 'react';
import { Link, useLocation} from 'react-router-dom';
import '../components/resultComponent.css'


function Result(props) {
    // const score = useContext(DataContext)
    const location = useLocation();
    const state = location.state;


    return (
        <div id='main-div'>
            <div id='container-div'>
            <p>Your score is {state.score !== null ? <span>{state.score}</span>:0}</p> 
             <div id='results-div'>
                <div p='total-ques-div'>
                    <p>Total number of questions </p>
                    <p>{state.totalQuestions !== null ? state.totalQuestions : 0}</p>
                </div>
                <div className='no-of-ques-div'>
                    <p>Number of attempted questions </p>
                    <p>{state.attempted !== null ? state.attempted : 0}</p>
                </div>
                <div className='no-of-correct-ans'>
                    <p>Number of correct answers</p>
                    <p> {state.correctAnswers !== null ? state.correctAnswers : 0}</p>
                </div> 
                <div className='no-of-wrong-ans'>
                    <p>Number of wrong answers </p>
                    <p>{state.wrongAnswers !== null ? state.wrongAnswers : 0}</p>
                </div>
             </div>
            </div>
            <div id='btn-container'>
  <Link to='/quiz'><button className='play-again-btn'>Play Again</button></Link>
  <Link to='/home'><button className='back-to-home-btn'>Back to home</button></Link>
</div>

        </div>
    )
}


export default Result