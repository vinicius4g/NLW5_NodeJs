import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"

import { SettingsRepository } from "../repositories/SettingsRepository"

class SettingsController {
    async create(request: Request, response: Response){
        const { chat, username } = request.body

        const settingsRepository = getCustomRepository(SettingsRepository)

        //criando objeto dentro da tabela
        //primeiro passo criar a representacao do objeto
        const settings = settingsRepository.create({
            chat,
            username,
        })

        //segundo passo salvar esse objeto
        await settingsRepository.save(settings)

        return response.json(settings)
    }
}

export { SettingsController }