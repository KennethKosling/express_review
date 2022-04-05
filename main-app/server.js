const express = require('express');

const app = express();

function isSquare(x){
    let y = parseInt(Math.sqrt(x))
    if(y*y == x){
        return true
    } else {
        return false
    }
}

app.get('/', (req, res) => {
    res.send('<h1>Please type \'localhost:INSERT PORT HERE/fibonacci\' into your URL</h1>')
})

app.get('/fibonacci', (req, res) => {
    res.send('<h1>Welcome to the Fibonacci Confirmation Application! <h1>Please type \'localhost:INSERT PORT HERE/fibonacci/INSERT NUMBER HERE\' to confirm if your number is (or is not!) a Fibonacci number!')
})

app.get('/fibonacci/:id', (req, res) => {
    if (isSquare(5*(req.params.id*req.params.id)-4)) {
        res.send("<h1>Very good! This is a Fibonacci number!")
    } else if (isSquare(5*(req.params.id*req.params.id)+4)) {
        res.send("<h1>Very good! This is a Fibonacci number!")
    } else {
        res.send("<h1>I can tell this is not a Fibonacci number.")
    }
})

app.listen(3000, console.log('Math is in everything that has ever existed'))