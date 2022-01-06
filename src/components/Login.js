import React from 'react'
import { getAuth } from "firebase/auth";
import './styles/Login.css'

const Login = ({ auth }) => {

    const login = () => {
        auth(getAuth())
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
