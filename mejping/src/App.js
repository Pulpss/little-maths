
import Grid from './Components/Grid';
import Input from './Components/Input';
import Position from './Components/Position';
import Header from './Components/Header';
import './App.css'
import { useState } from 'react/cjs/react.development';

function App() {
  const [rows, setRows] = useState(4)
  const [columns, setColumns] = useState(4)
  const [moves, setMoves] = useState([])
  const [board, setBoard] = useState(Array(16).fill(0))

  async function createBoard(rows,columns) {
      const response = await fetch("https://mejapi.herokuapp.com/create", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rows: rows,
          columns: columns
        })
      })
      const data = await response.json()
      return data
  }

  async function updateBoard(rows ,columns, pos, board){
    try {
      const response = await fetch("https://mejapi.herokuapp.com/update", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rows: rows,
          columns: columns,
          position: pos,
          board: board
        })
      })
      const json = await response.json()
      return json
    }catch (error)  {
      return error
    }
  }

  async function keepUpdating(rows ,columns, board, moves){
    try {
      const response = await fetch("https://mejapi.herokuapp.com/keepUpdating", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rows: rows,
          columns: columns, 
          moves: moves,
          board: board
        })
      })
      const json = await response.json()
      return json
    }catch (error)  {
      return error
    }
  }

  function submitFunc(){
    createBoard(rows,columns).then(res => setBoard(res.board))
  }

  async function submitMoves(){
    await keepUpdating(rows, columns, board, moves).then(res => setBoard(res.board))

  }

  async function updateFunc(position){
    await updateBoard(rows, columns, position, board).then(res => setBoard(res.board))
  }
  
  return (
    <div className="App">
      <Header>
        
      </Header>
      <Grid 
        rows={rows} 
        columns={columns} 
        board={board} 
        updateFunc={updateFunc}
      >

      </Grid>
      <Input submitFunc={submitFunc} setRows={setRows} setColumns={setColumns}>
      
      </Input>
      <Position setMoves={setMoves} submitMoves={submitMoves}>

      </Position>
    </div>
  );
}

export default App;
