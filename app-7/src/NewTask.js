import React, {Component} from 'react'

class NewTask extends Component{
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
    }

    updateInput(e){
        this.setState({
            userInput: e
        })
    }

    addTask(){
        this.props.myTaskFunction(this.state.userInput)
        this.setState({
            userInput: ''
        })
    }

    render(){
        return (
            <div>
                <input type = 'text' placeholder = 'Enter new task' onChange = {(e) => this.updateInput(e.target.value)}/>
                <button onClick = {() => this.addTask()}>Add</button>
            </div>
        )
    }
}

export default NewTask