const express = require('express')
const app = express()


app.get('/posts', (request, response) => {
    let posts=[
        {
            caption:'Golden Gate Bridge',
            location:'Vizag , india',
        },
        {
            caption:'London Eye',
            location:'london, uk',
        },
    ]
  response.send(posts)
})

app.listen(3000)