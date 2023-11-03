import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Products from './pages/Products.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Register from './components/Register.jsx'
import './App.css'



function App() {
  return (
    <>
     <h1 className="text-3xl font-bold underline">Capstone</h1> 
    <div className="App">
<Navbar />
<Routes>
        <Route path ="/" element={ <Products/> } />
        <Route path ="/login" element={ <Login/> } />
        <Route path ="/register" element={<Register/>} />
    </Routes>
    </div>
    </>
  )
}

export default App