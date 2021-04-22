import { getCustomRepository, Repository } from "typeorm"
import { Setting } from "../entities/Setting"
import { SettingsRepository } from "../repositories/SettingsRepository"

interface ISettingsCreate {
    chat: boolean;
    username: string;
}


class SettingsService {
    private settingsRepository: Repository<Setting>

    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository)
    }

    async create( { chat, username } :ISettingsCreate ){

        //Select * from settings where username = "username" limit 1
        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        })

        if(userAlreadyExists) {
            throw new Error("User already exists!")
        }

        //criando objeto dentro da tabela
        //primeiro passo criar a representacao do objeto
        const settings = this.settingsRepository.create({
            chat,
            username,
        })

        //segundo passo salvar esse objeto
        await this.settingsRepository.save(settings)

        return settings
    }
}

export { SettingsService }