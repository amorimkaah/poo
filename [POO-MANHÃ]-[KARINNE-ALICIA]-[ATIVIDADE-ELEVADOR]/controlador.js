
let inputTurma = document.getElementById('iptTurma');
let inputPrimeiroNome = document.getElementById('iptPrimeiroNome');
let inputUltimoNome = document.getElementById('iptUltimoNome');
let inputDataDeNascimento = document.getElementById('iptDataDeNascimento');
let inputMatricula = document.getElementById('iptMatricula');
let buttonCadastrar = document.getElementById('btnCadastrar');


//Esta é a div que vai receber os cards:
let containerDeCards = document.getElementById('containerDeCards')

//Listener ------------------------------------------------------

buttonCadastrar.addEventListener('click', quandoClicarEmCadastrar);
//fim dos listeners ---------------------------------------------
function quandoClicarEmCadastrar() {
    let alunoTemp = new Aluno(
        inputTurma.value,
        inputPrimeiroNome.value,
        inputUltimoNome.value,
        inputDataDeNascimento.value,
        inputMatricula.value
    );

    listaDeAlunos.push(alunoTemp);
    desenharCards(containerDeCards);
        console.log(inputDataDeNascimento.value);
}











