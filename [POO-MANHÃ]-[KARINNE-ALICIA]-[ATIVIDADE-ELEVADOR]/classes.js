class Passageiro {
    constructor(andarPretendido) {
        this._andarPretendido = andarPretendido
    }
}


class Elevador {
    constructor() {
        this._andarAtual = 0
        this._quantidadeMaximaDePassageiros = 9
        this._ListaDePassageiros = []

    }
    adicionarPassageiro(Passageiro) {

        if (this._ListaDePassageiros.length < this._quantidadeMaximaDePassageiros) {
            this._ListaDePassageiros.push(Passageiro)
            console.log(`1 passageiro que deseja ir ao andar ${Passageiro._andarPretendido} ENTROU no elevador.\nAgora o elevardor tem ${this._ListaDePassageiros.length} passageiros`)

        }
        else {

            console.log(`O passageiro não pode entrar. O elevador já atingiu a capacidade máxima:${this._quantidadeMaximaDePassageiros} passageiros.`)


        }

    }
    movimentar(andarDeDestino) {
        this._andarAtual = andarDeDestino
        console.log(`Agora o elevador está no ANDAR${this._andarAtual}`)

        let pS = 0

        for (let i = 0; i < this._ListaDePassageiros.length; i++) {

            if (this._ListaDePassageiros[i]._andarPretendido == this._andarAtual) {
                this._ListaDePassageiros.splice(i, 1)
                pS++
                i--
            }

        }
        console.log(`${pS} passageiros SAÍRAM do elevador.\n${this._ListaDePassageiros.length} passageiros CONTINUAM no elevador.`)
    }

}

