import express from 'express';

import "./database"
import { routes } from './routes'

const app = express();

//definindo que podem chegar req em formato json
app.use(express.json())

app.use(routes)

//iniciando a aplicacao
app.listen(3333, () => console.log('Backend rodando, na porta 3333'))