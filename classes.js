class Bala{
    constructor(raio, cor){
        this.raio = raio;
        this.cor = cor;
    }
}

class Player{
    constructor(nome, qtdLados, raio, cor, velocidadeMaxDoTiro, ataque){
        this.nome = nome;
        this.qtdLados = qtdLados;
        this.raio = raio;
        this.cor = cor;
        this.velocidadeMaxDoTiro = velocidadeMaxDoTiro ;
        this.ataque = ataque;
        this.vida = 100;
        this.bala = new Bala (this.ataque, this.cor);
    }
}

class GerenciadorDeDuelo{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }
    getLadoPlayer1(){
        return 'esquerda'
    }
    getLadoPlayer2(){
        return 'direita'
    }
}