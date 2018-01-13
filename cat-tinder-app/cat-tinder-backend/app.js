var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var validator = require('express-validator');
var app = express();
var Cat = require('./models').Cat;

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(validator())
app.use(cors())

app.get('/', (req, res) => {
  res.json({message: 'API Example App'})
});

// displays cats page w/ raw json cats list
app.get('/cats', (req, res) =>{
    Cat.findAll().then( (cats) =>{
        res.json({cats:cats})
    })
});

app.post('/cats', (req, res) => {
    req.checkBody('name','is required').notEmpty()
    req.checkBody('age','is required').notEmpty()
    req.checkBody('location','is required').notEmpty()
    req.checkBody('hobby','is required').notEmpty()
    req.checkBody('dislikes','is required').notEmpty()
    req.checkBody('quote','is required').notEmpty()
    req.checkBody('lookingFor','is required').notEmpty()


    req.getValidationResult()
        .then((validationErrors) =>{
            if(validationErrors.isEmpty()){
                Cat.create({
                    name: req.body.name,
                    age: req.body.age,
                    location: req.body.location,
                    hobby: req.body.hobby,
                    dislikes: req.body.dislikes,
                    quote: req.body.quote,
                    lookingFor: req.body.lookingFor
                }) .then((cat)=>{
                    res.status(201)
                    res.json({cat:cat})
                })
            }else{
                res.status(400)
                res.json({errors: {validations: validationErrors.array()}})
            }
        })

})

module.exports = app
