import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className="container text-center mt-5 mb-5 mx-auto my-auto bg-light p-5 rounded w-50 shadow">
                <Link to="/TodoList" className=" text-decoration-none mb-5 display-1 text-dark">Todo App</Link>
                <br></br>
                <Link to="/Map" className=" mt-5 text-decoration-none mb-5 display-1 text-dark">Map</Link>
            </div>
        </div>
    )
}

export default Home