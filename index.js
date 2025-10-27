const express = require('express')

const app = express()

const port = 80

const phrases = [
    "Get ready to be inspired…",
    "See rejection as redirection.",
    "There is beauty in simplicity.",
    "You can't be late until you show up.",
    "Maybe life is testing you. Don’t give up.",
    "Impossible is just an opinion.",
    "Alone or not you gonna walk forward.",
    "Sometimes I feel like throwing in the towel, but then with what do I dry myself?",
    "Sometimes the people who speak the least, are the most silent.",
    "Looking at a window is like looking at wall but instead of a wall it´s a window.",
    "A veces me siento solo, y aveces me ayudan a sentarme.",
    "Having a million dollars is like having a dollar a million times.",
]

app.get('/', (req, res) => {

    const length = phrases.length;
    const number = Math.floor(Math.random() * length);
    res.send(phrases[number] + " - Container Id: "+os.hostname())

})

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)

})