const express = require('express')
const bodyParser = require('body-parser')
const pdf = require('html-pdf')
const cors = require('cors')
const pug = require('pug')

const pdfTemplate = require('./documents')
const pugFile =  pug.renderFile( './views/index.pug', {})
  


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 5000

// Template engine
app.set('view engine', 'pug')

// Post route PDF generation 
app.post('/create-pdf', (req, res) => { 
    // options{} we leave empty
    pdf.create(pug.renderFile( './views/index.pug', {})).toFile('result.pdf', (err) => {
        if(err){res.send(Promise.reject())}
        res.send(Promise.resolve())
    })
})

// Get request- send the generated pdf to the client
app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`);
  });

// Test pug
app.get('/pug', (req, res) => {
    res.render('index', {title: "The title", message: "The message"})
})

app.listen(port, () => console.log(`Listening on port ${port}`))
