// Crie a classe Aluno.
// Ela deverá ter 3 atributos:
// nome;
// idade;
// matricula.

class Aluno{
    constructor(turma, primeiroNome, ultimoNome, dataDeNascimento, matricula, foto){
        this.turma = turma;       
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;

        this.dataDeNascimento = new Date(dataDeNascimento); 
        this.matricula = matricula;
        this.foto = foto;
    }

    getNome(){
        return `${this.ultimoNome}, ${this.primeiroNome}`; // Silva, Alexsander
    }

    getIdade(){
        let hoje = new Date(); /* A variável hoje receberá a data atual */
        return Math.floor(( hoje - this.dataDeNascimento ) / (1000 * 60 * 60 * 24 * 365.25));
    }
}