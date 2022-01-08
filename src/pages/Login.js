import React from 'react'
import Google from '../img/google.png'
import Facebook from '../img/facebook.png'
import Github from '../img/github.png'
import {Link} from "react-router-dom";



const Login = (props) => {

    return (
        <div className="login">
            <h1 className="loginTitle">Choose your Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" >
                        <img src={Google} alt="google" className="icon"/>Google
                    </div>

                    <div className="loginButton facebook">
                        <img src={Facebook} alt="facebook" className="icon"/>Facebook
                    </div>

                    <div className="loginButton github" >
                        <img src={Github} alt="github" className="icon"/>Github
                    </div>
                </div>

                <div className="center">
                    <div className="line"/>
                    <div className="or">OR</div>

                </div>

                <div className="right">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button className="submit" ><Link onClick={props.handleSubmit} className="link" to="/">Login</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Login
