import React , {Component} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Quiz from './quizComponent';
import '../components/homeComponent.css'
class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='main-div'>
                <h1>Quiz App</h1>
               <Link to={"/quiz"}> <button>play</button></Link>
            </div>
        )
    }
}

export default Home
