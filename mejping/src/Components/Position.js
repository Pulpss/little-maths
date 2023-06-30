import React from 'react'
import {Form} from './Position-sc'

function Position(props) {
    function handleSubmit(e){
        e.preventDefault()
        props.submitMoves()
    }
    return (
        <Form onSubmit={handleSubmit}>
            <input 
                name="rows" 
                placeholder="Enter moves to play"
                onChange={(e)=> props.setMoves(e.target.value.split(" "))}>
            </input>
            <button type="submit">OK</button>
        </Form>
    )
}

export default Position
