import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("Hello, express!")
})

app.listen(8080)
