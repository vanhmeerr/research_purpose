import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand" to="#">Big App</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link class="nav-link" to="/TodoList">Todo App</Link>
                        <Link class="nav-link" to="/Map">Map</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar