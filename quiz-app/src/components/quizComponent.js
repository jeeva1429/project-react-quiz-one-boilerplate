import React , {Component} from 'react';
import '../components/quizComponent.css'
import data from '../resources/question.json'
class Quiz extends Component{
    constructor(props){
        super(props)

    this.state = {
        questionNo:0,
    }
    }
    nextQuestion(){ 
        if(this.state.questionNo<14){
      this.setState({questionNo:this.state.questionNo+1})
        }
    }
     
    previousQuestion(){
        if(this.state.questionNo >0){
        this.setState({questionNo:this.state.questionNo-1})}
    }
    quit(){
        window.confirm('Are you want to quit')?this.setState({questionNo:this.state.questionNo-this.state.questionNo}):this.setState({questionNo:this.state.questionNo})
    }
    render(){
        return (
            <div className='container'>
                <div id='sub-container'>
                <h1>Question {this.state.questionNo+1}</h1>
                    <div id='question-no'>
                    <span>{this.state.questionNo+1} of 15</span>
                    </div>
                    
                    <p>{data[this.state.questionNo].question}</p>
                    <div className='options-div'>
                            <button>{data[this.state.questionNo].optionA} </button>
                            <button>{data[this.state.questionNo].optionB}</button>
                            <button>{data[this.state.questionNo].optionC}</button>
                            <button>{data[this.state.questionNo].optionD}</button>
                    </div>
                    <div className='nav-div'>
                            <button onClick={this.previousQuestion.bind(this)}>Previous</button>
                            <button onClick={this.nextQuestion.bind(this)}>Next</button>
                            <button onClick={this.quit.bind(this)}>Quit</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Quiz