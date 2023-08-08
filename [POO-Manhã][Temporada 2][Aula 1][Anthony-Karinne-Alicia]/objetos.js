let aluno1 = new Aluno(
    "Maria José", 75, 8082023

)

let aluno2 = new Aluno(
    "Abmaelsson", 77, 8082022

)
let aluno3 = new Aluno(
    "José Maria", 83, 8082021

)

let listaDeAlunos = []
listaDeAlunos.push(aluno1)
listaDeAlunos.push(aluno2)
listaDeAlunos.push(aluno3)


for (let i = 0; i < listaDeAlunos.length; i++) {
    document.write(`
    <div>
        
----------------------------
<div>Nome:${listaDeAlunos[i].nome}</div>
<div>Idade:${listaDeAlunos[i].idade}</div>
<div>Matricula:${listaDeAlunos[i].matricula}</div>
----------------------------
    </div>
    `)
}



