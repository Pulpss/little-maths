import {Form,
        } from './Input-sc'

function Input(props){

    
    function handleSubmit(e){
        e.preventDefault()
        props.submitFunc()
    }

    return(
        <Form onSubmit={handleSubmit}>
            <input 
                name="rows" 
                placeholder="Enter number of rows"
                type="number"
                onChange={(e)=> props.setRows(e.target.valueAsNumber)}>
            </input>
            <input 
                name="columns" 
                placeholder="Enter number of columns"
                type="number"
                onChange={(e)=> props.setColumns(e.target.valueAsNumber)}>
            </input>
            <button type="submit">OK</button>
        </Form>
    )
}

export default Input