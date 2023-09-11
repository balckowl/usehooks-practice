import { useState } from 'react'
import { AuthProvider } from './Context/AuthContext'
import './App.css'
import UserAuth from './Components/userAuth/UserAuth'

function App() {

  return (
    <AuthProvider>
      <div className="app">
        <h2>useContext</h2>
        <UserAuth />
      </div>
    </AuthProvider>
  )
}

export default App
