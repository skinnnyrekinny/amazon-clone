import React, { useState} from 'react';
import { Link , useHistory} from "react-router-dom";
import './Login.css';
import {auth} from "./firebase";

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //some fancy firebase login stuff

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    };

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully created a new user!
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        //some fancy firebaseregister stuff
    }

    return (
        <div className="login">
            <Link to= "/">
            <img
            className="login__logo" 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png' />
            </Link>

            <div className="login__container">
                <h1>
                    Sign-in
                </h1>

                <form>
                    <h5>
                      E-mail  
                    </h5>
                    <input type="text" value={email} 
                    onChange={e => setEmail(e.target.value)} />

                    <h5>
                    Password  
                    </h5>
                    <input type="password" value={password} 
                    onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className="login__signInButton">
                        Sign in!
                    </button>

                    <p>
                        By signing-in you agree to the clone conditions of Use & Sale.
                    </p>

                    <button onClick={register} className="login__registerButton">
                        Create your fake amazon account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
