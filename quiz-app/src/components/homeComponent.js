import React , {Component} from 'react';
import '../components/homeComponent.css'
class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='main-div'>
                <h1>Quiz App</h1>
                <button>play</button>
            </div>
        )
    }
}

export default Home
