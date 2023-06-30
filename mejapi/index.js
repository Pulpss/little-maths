const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 80

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

function updateGrid(board, rows, columns, position) {
    function changeValue(value){
        return 2 + (17*value)/3 - 6*value**2  + (4*value**3)/3
    }
    if(position<columns){
        if(position==0){
            board[position+1]=changeValue(board[position+1])
            board[position+columns]=changeValue(board[position+columns])
            board[position+columns+1]=changeValue(board[position+columns+1])
        }else if(position==columns-1){
            board[position-1]=changeValue(board[position-1])
            board[position+columns]=changeValue(board[position+columns])
            board[position+columns-1]=changeValue(board[position+columns-1])
        }else{
            board[position-1]=changeValue(board[position-1])
            board[position+1]=changeValue(board[position+1])
            board[position+columns]=changeValue(board[position+columns])
            board[position+columns-1]=changeValue(board[position+columns-1])
            board[position+columns+1]=changeValue(board[position+columns+1])
        }
    }else if(position>=columns*rows-columns){
        if(position==columns*rows-1){
            board[position-1]=changeValue(board[position-1])
            board[position-columns]=changeValue(board[position-columns])
            board[position-columns-1]=changeValue(board[position-columns-1])
        }else if(position==(rows-1)*columns){
            board[position+1]=changeValue(board[position+1])
            board[position-columns]=changeValue(board[position-columns])
            board[position-columns+1]=changeValue(board[position-columns+1])
        }else{
            board[position-1]=changeValue(board[position-1])
            board[position+1]=changeValue(board[position+1])
            board[position-columns-1]=changeValue(board[position-columns-1])
            board[position-columns]=changeValue(board[position-columns])
            board[position-columns+1]=changeValue(board[position-columns+1])
        }
    }else{
        if(position%columns==0){
            board[position-columns]=changeValue(board[position-columns])
            board[position-columns+1]=changeValue(board[position-columns+1])
            board[position+1]=changeValue(board[position+1])
            board[position+columns]=changeValue(board[position+columns])
            board[position+columns+1]=changeValue(board[position+columns+1])
        }else if(position%columns==columns-1){
            board[position-columns]=changeValue(board[position-columns])
            board[position-columns-1]=changeValue(board[position-columns-1])
            board[position-1]=changeValue(board[position-1])
            board[position+columns-1]=changeValue(board[position+columns-1])
            board[position+columns]=changeValue(board[position+columns])
        }else{
            board[position-columns-1]=changeValue(board[position-columns-1])
            board[position-columns]=changeValue(board[position-columns])
            board[position-columns+1]=changeValue(board[position-columns+1])
            board[position-1]=changeValue(board[position-1])
            board[position+1]=changeValue(board[position+1])
            board[position+columns-1]=changeValue(board[position+columns-1])
            board[position+columns]=changeValue(board[position+columns])
            board[position+columns+1]=changeValue(board[position+columns+1])
        }
    }
    if(board[position]===0 || board[position]===2){
        board[position]=board[position]+1
    }else{
        board[position]=board[position]-1
    }
    return board
}

app.use('/update', (req, res) => {
    var board = req.body.board
    var rows = req.body.rows
    var columns = req.body.columns
    var position = req.body.position
    updateGrid(board, rows, columns, position)

    res.send({board})
})

app.use('/keepUpdating', (req, res) => {
    var board = req.body.board
    var rows = req.body.rows
    var columns = req.body.columns
    var moves = req.body.moves
    for (let i=0; i<moves.length; i++) {
        board = updateGrid(board, rows, columns, parseInt(moves[i]))
    }
    res.send({board})
})

app.post('/create', (req, res) => {
    var rows = req.body.rows
    var columns = req.body.columns
    var board = [...Array(rows*columns)].fill(0)
    res.send({board})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})