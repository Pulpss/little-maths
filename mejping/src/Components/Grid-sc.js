import styled from "styled-components"

export const GridContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    grid-template-rows: repeat(${props => props.rows}, 1fr);
    gap: 1px 1px;
`

export const Button = styled.button`
    height: 50px;
    width: 50px;
    background-color: ${props => {
        if(props.value===0 || props.value===1){
            return "black"
        }else{
            return "red"
        }
    }};
    border: ${props => {
        if(props.value===1 || props.value===3){
            return "5px solid green"
        }else{
            return "none"
        }
    }};
    border-radius: 3px;
    cursor: pointer;
`

export const Sizer = styled.div`
    margin: auto;
    margin-top: 30px;
    width: ${props => props.columns*(50+2)}px;
    height: auto;
`