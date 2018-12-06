let express = require('express')
let app = express()
let bodyParser  = require('body-parser')

app.set('view engine', 'ejs')

app.use('/assets', express.static('public'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/',(request, response) =>{
    response.render('pages/index', {test: 'Salut'})
})

app.post('/',(request, response) =>{

    let Nom = require('./models/nom')
    Nom.create(request.body.message, function () {
        
    })
})

app.listen(3000)