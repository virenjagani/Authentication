import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super()
        localStorage.setItem('isLogin',JSON.parse(true))
        this.state={
            
        }
    }
    render() {
        return (
            <div>
                login
            </div>
        );
    }
}

export default Login;