import {GridContainer,
        Button,
        Sizer} from "./Grid-sc"


function Grid(props) {
    const boardContent = Array.from(props.board)

    function handleButton(index){
        console.log(index)
        props.updateFunc(index)
    }

    const board = boardContent.map((value, index) => <Button key={index} index={index} value={value} onClick={() => handleButton(index)}/>)
    return(
        <Sizer rows={props.rows} columns={props.columns}>

            <GridContainer rows={props.rows} columns={props.columns}>
            
            {board}

            </GridContainer>
        </Sizer>
    )
}

export default Grid