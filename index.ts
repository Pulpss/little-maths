
const startingElo = 1000
const startingBonus = 14
const numberOfPlayers = 20

const players = new Array(numberOfPlayers).fill(startingElo)

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const winFunc = (difference: number) => {
    var equilibrium = Math.abs(players.reduce((partialSum, a) => partialSum + a, 0) - numberOfPlayers*startingElo)/(14*numberOfPlayers)
    equilibrium = 0
    if (difference < 0) {
        return Math.ceil(-difference / ( 2 * startingBonus ) + startingBonus + equilibrium ) as number
    } else {
        return Math.ceil((20 * startingBonus )/( difference + 20) + equilibrium ) as number
    }
}

for (let i = 0; i < numberOfPlayers*30000 ; i++) {
    const playing = [getRandomInt(numberOfPlayers), getRandomInt(numberOfPlayers)]
    var winner = 0
    if (playing[1] == 0) {
        winner = 1
    }
    if (playing[0] != playing[1]) {
        const difference =  players[playing[winner]] - players[playing[-winner+1]]
        players[playing[winner]] = players[playing[winner]] + winFunc(difference)
        players[playing[-winner+1]] = players[playing[-winner+1]] - winFunc(difference)
    }
}


console.log(players)
console.log(players.reduce((partialSum, a) => partialSum + a, 0))
