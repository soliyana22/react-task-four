import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Navigation_list from './Components/Navigation/Navigation_list'
import Home from './Components/Home/Home.jsx'
import SignUp from './pages/SignUp/SignUp'
import Contact from './pages/Contact'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom';
import { LogIn } from './pages/LogIn/LogIn.jsx'


function App() {
 

  return (
    <div>
      {/* Navigation */}
      
    
      <Header/>
      <Navigation_list/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}


export default App
