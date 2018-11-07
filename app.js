const express = require('express')
const app = express()
const models = require('./models')
var mustacheExpress = require ('mustache-express')

app.engine('mustache',mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', './views')


// const grocery = models.grocery.build({
//     name: "Randalls",
//     street: "5555 Richmond",
//     city: "Houston",
//     state: "TX",
//     grocery_item: "Apples",

// })

// grocery.save().then(function(newGrocery){
//     console.log(newGrocery)
// })




// models.grocery.findOne().then(function(grocery){
//     console.log(grocery)
// })



app.get('/', function(req,res){

    models.grocery.findAll().then(function(groceries){
        res.render('index',{groceries:groceries})
    })



})




app.listen(3000,function(req,res){
    console.log("Server started..")
  })