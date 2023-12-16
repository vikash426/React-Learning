import express from "express";
import Routes from "./routes";
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', Routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})