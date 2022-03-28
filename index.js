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

app.get('/', function (req, res) {
  fs.readdir('./TimeContent', (err, files) => {
    if (err) console.log(err)
    else {
      res.send(files)
      console.log('\nCurrent directory filenames:')
      files.forEach((file) => {
        console.log(file)
      })
    }
  })
})

app.listen(PORT, () => {
  console.log('App is running on port:', PORT)
})
