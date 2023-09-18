function desenharCards(container) {
container.innerHTML = '';

container.innerHTML = '';

for(let i = 0; i < listaDeAlunos.length; i++){
    container.innerHTML += `
    <div class='card'>

        <div class='cabecalho'>
            <div>
                <p class='turma'>${listaDeAlunos[i].turma}</p>
                <h3 class='nome'>${listaDeAlunos[i].getNome()}</h3>
            </div>
            <img class='logo' src='img/logo-ifal.png'/>
        </div>
    
        <div class='conteudo'>
            <img class='foto' src=''>
            <div class='info'>

                <div>
                    <p class='label'>Idade</p>
                    <p class='valor'>${listaDeAlunos[i].getIdade()}</p>
                </div>
                <div>
                    <p class='label'>Matrícula</p>
                    <p class='valor'>${listaDeAlunos[i].matricula}</p>
                </div>
                
            </div>
        </div>

    </div>`;
    }
}
