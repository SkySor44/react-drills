import React, {Component} from 'react'


class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.alertLogin = this.alertLogin.bind(this)
    }

    updateUser(e){
        this.setState({
            username: e
        })
    }

    updatePass(e){
        this.setState({
            password: e
        })
    }

    alertLogin(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return (
            <div>
                <input type = 'text' placeholder = 'Username' onChange = {(e) => this.updateUser(e.target.value)}/>
                <input type = 'text' placeholder = 'Password' onChange = {(e) => this.updatePass(e.target.value)}/>
                <button onClick = {() => this.alertLogin()}>Login</button>
            </div>
        )
    }
}

export default Login