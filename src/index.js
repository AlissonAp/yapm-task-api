const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const projectsRoute = require('./routes/projectsRoute');
const tasksRoute = require('./routes/tasksRoute');

const app = express()

//Cors and body-parser
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))

//Routes
app.get("/", (req, res) => {res.send("Welcome")})
app.use("/projects",projectsRoute);
app.use("/tasks", tasksRoute);

mongoose.connect(config.db.__URL, {
    useNewUrlParser: true, 
    useCreateIndex: true
}).then( ok => console.log("Conexao com o banco de dados realizada com sucesso!"))

app.listen(config.api.__PORT || 3000, function(err){
    if(err) return;
    console.log("Api listen on port",config.api.__PORT)
});