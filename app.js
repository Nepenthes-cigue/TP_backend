require('dotenv').config() //appel de librairie dotenv pour le .env

const mongoose = require('mongoose') //appel de librairie mongoose
mongoose.connect(process.env.BDD) //appel de la var env BDD pour la connexion à la BDD

const express = require('express')


//PORT > 1024
const port = process.env.PORT //port d'écoute du serveur (appel var env PORT)
const app = express()
const server = require('http')
const srv = server.createServer(app)

const getRouter = require("./loaders/route.js")

app.use(express.json()) //middleware pour parser le body en json
app.use(getRouter()) //utilisation de la route
app.use(express.urlencoded({ extended: true }))

srv.listen(port, () => { /*Def fonction dans les param*/
    console.log(`Server is running on port ${port}`)
})