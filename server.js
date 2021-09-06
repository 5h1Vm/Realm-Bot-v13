const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Yeah Boss I am on it...")
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Bot is running!")
  })
}

module.exports = keepAlive