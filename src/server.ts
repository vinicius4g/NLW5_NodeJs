import express, { request, response } from 'express';

const app = express();

//METODOS HTTP
//get -> buscar a informaçao(listar usuario), 
//post -> criar alguma informaçao (cadastrar usuario), 
//put -> editar informação (editar usuario) ,
//delete -> deletar informação (deleatr usuario)
//patch -> alterar uma informação especifica (editar usuario especifico)

app.get("/", (request, response) => {
    return response.json({
        message: "Olá NLW 05"
    })
})

app.post("/users", (request, response) => {
    return response.json({
        message: "Usuario salvo com sucesso"
    })
})


//iniciando a aplicacao
app.listen(3333, () => console.log('Backend rodando, na porta 3333'))