import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import UserList from './components/UserList'
import axios from 'axios'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import UserDetail from './pages/UserDetail'

function App() {
 

  return (
    <>
    <Header/>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users/:userId" element={<UserDetail/>}/>
      </Routes>
    </div>
    {/* <UserList users={users} /> */}
    </>
  )
}

export default App
