import React, {useContext} from 'react'
import {Context} from "./Context"

export default function Login() {
    const {login, handleLogin} = useContext(Context)

    if(!login) {
  return (
    <div className="min-h-screen">
        <h1 className="text-5xl text-black dark:text-green-200 font-bold py-16">Welcome</h1>
        <button className="text-3xl text-black bg-slate-500 dark:bg-green-200 dark:text-slate-500 rounded-full px-6 py-3"
         onClick={() => handleLogin()}>Start shopping</button>
    </div>
  )
    }
}
