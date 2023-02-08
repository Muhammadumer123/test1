const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/data', (req, res) => {
    const data = req.body
    console.log(data)
  // res.send('Hello World! umer')
  //  res.sendStatus(200);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})