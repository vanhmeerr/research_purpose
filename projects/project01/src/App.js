import React from 'react'
import Weather from './Weather/Weather'
import Navbar from './Navbar/Navbar'


function App() {
  return (
    <div>
      <header className="App-header">
        <div>
          <Navbar />
          <Weather />
          {/* <TodoList />
          <UserProfile /> */}

        </div>

      </header>
    </div>
  )
}

export default App