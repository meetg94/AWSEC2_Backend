const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        message: 'Hello From Backend!'
    })
})

app.listen(3000)