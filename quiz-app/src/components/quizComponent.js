import React , {Component} from 'react';
import '../components/quizComponent.css'
class Quiz extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='container'>
                <div id='sub-container'>
                <h1>Question 1</h1>
                    <div id='question-no'>
                    <span>1 of 15</span>
                    </div>
                    
                    <p>Which is the only mammal that can jump</p>
                    <div className='options-div'>
                            <button>Dog </button>
                            <button>Elephant</button>
                            <button>Goat</button>
                            <button>Lion</button>
                    </div>
                    <div className='nav-div'>
                            <button>Previous</button>
                            <button>Next</button>
                            <button>Quit</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Quiz