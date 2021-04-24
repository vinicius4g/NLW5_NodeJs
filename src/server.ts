import { http } from "./http"
import "./websocket/client"
import "./websocket/admin"

//iniciando a aplicacao
http.listen(3333, () => console.log('Backend rodando, na porta 3333'))