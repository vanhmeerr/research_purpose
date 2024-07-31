import React from 'react'

function ecom(props) {
    return (
        <div>
            <center>
                <h1>{props.name1}</h1>
                <button onClick={() => props.hye()}>Hi!</button>
            </center>
        </div>
    )
}

export default ecom