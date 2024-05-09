import React from 'react'
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Home/>} path=''/>
        <Route element={<About/>} path='about'/>
      </Routes>
    </HashRouter>
  )
}

export default App