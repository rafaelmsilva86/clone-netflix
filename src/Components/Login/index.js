import React from 'react'
import { Routes, Route } from 'react-router'
import LoginForm from './LoginForm/'

const Login = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
        </Routes>
    )
}


export default Login