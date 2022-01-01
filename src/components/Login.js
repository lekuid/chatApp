import React from 'react'
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import './styles/Login.css'

const Login = ({ user, loginState }) => {

    const login = () => {
        const auth = getAuth()
        signInAnonymously(auth)
        .then(onAuthStateChanged(auth, (u) => {
            if(u) {
                loginState(true)
                user(u.uid)
            } else {
                loginState(false)
            }
        }))
    }

    return (
        <div className='LoginPage Background'>
            <button
            className='LoginButton ConfigButton'
            onClick={login}>
                Login
            </button>
        </div>
    )
}

export default Login
