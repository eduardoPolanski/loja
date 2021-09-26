import { connect } from "mongoose"


const url = "mongodb://localhost:27017/loja"

export const mongoConnect = async () => {
    try {

        console.log("Conectado ao MongoDB...")
        await connect(url as string)
        console.log("MongoDB conectado com sucesso!")

    } catch(error) {
        console.log("Erro Conexão MongoDB: ", error)
    }
}