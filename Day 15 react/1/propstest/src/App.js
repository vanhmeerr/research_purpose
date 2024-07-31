import React from 'react'
import Ecom from './ecom'

function App() {
  const name = 'Good Morning Developers ❤️'

  function hye() {
    alert('You are awesome')
  }
  return (
    <div>

      <Ecom name1={name} hye={hye} />

    </div>
  )
}

export default App