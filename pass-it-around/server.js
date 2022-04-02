const express = require('express');

const app = express();

//Home page to start the count
app.get('/', (req, res) => {
    res.send(`<h1>99 bottles of beer on the wall, 99 bottles of beer! <h1><a href='/98'>Take one down, pass it around!</a>`)
})

// Start over/0 Route

app.get('/0', (req, res) => {
    res.send(`<h1>No bottles of beer on the wall, no bottles of beer! <h1><a href='/99'>Take some time, put some more!</a>`)
})

// Decreasing the count/Not 0 Route

app.get('/:number_of_bottles', (req, res) => {
    res.send(`<h1>${req.params.number_of_bottles} bottles of beer on the wall, ${req.params.number_of_bottles} bottles of beer! <h1><a href=${req.params.number_of_bottles-1}>Take one down, pass it around!</a>`)
})

// All-in-one/Conditional Route

// app.get('/:number_of_bottles' , (req,res)=>{
//     if(req.params.number_of_bottles != 0 ){
//     res.send (`<h1>${req.params.number_of_bottles} bottles of beer on the wall, ${req.params.number_of_bottles} bottles of beer! <h1><a href=${req.params.number_of_bottles-1}>Take one down, pass it around!</a>`)
//     } else {
//         res.send (`<h1>No bottles of beer on the wall, no bottles of beer! <h1><a href='/99'>Take some time, put some more!</a>`)
//     }
// })

app.listen(3000)