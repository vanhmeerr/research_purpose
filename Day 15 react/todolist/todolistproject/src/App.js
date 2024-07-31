import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import TodoList from './TodoList/TodoList'
import Map from './Map/Map'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/Map" element={<Map />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App