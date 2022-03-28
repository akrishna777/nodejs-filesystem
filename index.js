const { time } = require('console')
const { text } = require('express')
const express = require('express')
const app = express()
const PORT = 3456
const fs = require('fs')

let timeStamp = new Date()
let date = timeStamp.toDateString()
let hours = timeStamp.getHours()
let minutes = timeStamp.getMinutes()
let seconds = timeStamp.getSeconds()
let dateTime = `${date} - ${hours};${minutes};${seconds}`

fs.appendFile(`./TimeContent/${dateTime}`, `${timeStamp}`, 'utf-8', function (
  err,
) {
  if (err) {
    console.log(err)
  } else {
    console.log('done')
  }
})

fs.readdir('./TimeContent', (err, files) => {
  if (err) console.log(err)
  else {
    app.get('/', function (req, res) {
      res.send(files)
    })
  }
  console.log(files)
})

app.listen(PORT, () => {
  console.log('App is running on port:', PORT)
})
