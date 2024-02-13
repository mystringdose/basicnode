import express  from "express"

const app = express()
const port = 3500

app.get('/', (req, res) => {
    res.send('Welcome to my docker app!')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})