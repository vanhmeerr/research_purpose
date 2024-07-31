import React, { useState } from 'react'
import userData from './Data'

function App() {
  const [users, setUsers] = useState(userData);
  return (
    <div>
      <div>

      </div>

      {
        users.map((used) => (
          <div>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item">ID: {used.id}</li>
              <li class="list-group-item">Name: {used.name}</li>
              <li class="list-group-item">Age: {used.age}</li>
            </ul>
          </div>
        ))
      }
    </div>
  )
}

export default App