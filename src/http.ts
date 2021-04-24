import express, { request, response } from 'express';
import { createServer } from "http"
import { Server, Socket } from "socket.io"
import path from "path"

import "./database"
import { routes } from './routes'

const app = express()

//todas as configuracoes para poder utilizar o html dentro das rotas
app.use(express.static(path.join(__dirname, "..", "public"))) //fazendo a aplicao enxergar o front (public)
app.set("views", path.join(__dirname, "..", "public")) //setando onde a views estarao
app.engine("html", require("ejs").renderFile) //informar qual a engine que vai ser utilizada
app.set("view engine", "html")


app.get("/pages/client",(request, response) => {
    return response.render("html/client.html")
})

app.get("/pages/admin",(request, response) => {
    return response.render("html/admin.html")
})

//criando um servido http e utilizando tudo que tem dentro do app
const http = createServer(app) //criando o protocolo http

//criando um servidor do socket.io, passando o protocolo http
const io = new Server(http) //criando o protocolo ws

//parte para o usuario se conectar com o web socket
io.on("connection", (socket: Socket) => {
    // console.log("Se conectou", socket.id)
})

//definindo que podem chegar req em formato json
app.use(express.json())

app.use(routes)

export { http, io } 