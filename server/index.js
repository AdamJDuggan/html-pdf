const express = require('express')
const bodyParser = require('body-parser')
var fs = require('fs');
const pdf = require('html-pdf')
const cors = require('cors')
const pug = require('pug')
const path = require('path')



const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

const port = process.env.PORT || 5000

// Template engine
app.set('views', 'views');
app.set('view engine', 'pug');
app.use('/static', express.static(__dirname + '/public'));



// SEND FILE APPROACH TO TEST PUG TEMPLATE
app.get('/create-pdf', (req, res) => {
    const html = pug.renderFile('./views/index2.pug', {
        name: 'Adam',
        name2: 'Adam2'
    })
    res.send(html)
})


// Buffer approach 
app.post('/buffer', (req, res) => {
    const html = pug.renderFile('./views/index2.pug', {
        name: req.body.name
    })
    const options = {
        "orientation": "landscape",
        "font-weight": "100",
        "type": "pdf",
        // Base path that's used to load files (images, css, js) 
        // when they aren't referenced using a host
        "base": process.env.NODE_ENV === "production" ? process.WEBSITE_HOSTNAME : req.headers.origin
    }
    pdf.create(html, options).toBuffer((err, buffer) => {
        if (err) {
            console.log(err)
            return res.status(500).json({
                error: 'Something went wrong'
            })
        }
        res.setHeader('Content-type', 'application/pdf')
        res.type('pdf')
        res.end(buffer, 'binary')
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`))

// STREAM APPROACH 
// Piping is a process in which we provide the output of one stream as the input to another stream. 
// It is normally used to get data from one stream and to pass the output of that stream to another stream. 
// app.get('/stream', (req, res) => {
//     const html = pug.renderFile('./views/index.pug')
//     const options = {
//         "orientation": "landscape"
//     }
//     pdf.create(html,options).toStream( (err, stream) => {
//         if (err) {
//             console.log(err)
//             return res.status(500).json({error: 'Something went wrong'})
//         }
//         res.setHeader('Content-type', 'application/pdf')
//         //res.download()
//         stream.pipe(res)
//     })
// })

// app.get('/pug', (req, res) => {
//     pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
//       if(err) {
//           return console.log('error');
//       }
//       res.sendFile(`${__dirname}/result.pdf`);
//     });
//   })