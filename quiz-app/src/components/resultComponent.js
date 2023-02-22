import React , {Component} from 'react';
import '../components/resultComponent.css'
class Result extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='main-div'>
                <div className='container-div'>
                <p>You need more practice</p>
                <h1>Your score is 20%</h1>
                 <div className='results-div'>
                    <div p='total-ques-div'>
                        <p>Total number of questions</p>
                        <p>15</p>
                    </div>
                    <div className='no-of-ques-div'>
                        <p>Number of attempted questions</p>
                        <p>9</p>
                    </div>
                    <div className='no-of-correct-ans'>
                        <p>Number of correct answers</p>
                        <p>3</p>
                    </div> 
                    <div className='no-of-wrong-ans'>
                        <p>Number of wrong answers</p>
                        <p>6</p>
                    </div>
                 </div>
                </div>
                <div className='btn-container'>
                    <button>Play Again</button>
                    <button>Back to home</button>
                </div>
            </div>
        )
    }
}

export default Result