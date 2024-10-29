const alunos = [];

function cadastrar(nome, idade) {
    // Verifica se o aluno é maior de idade
    const maiorIdade = idade >= 18;

    const aluno = {
        nome: nome,
        idade: idade,
        maiorIdade: maiorIdade
    };


    alunos.push(aluno);
}

function listarAlunos() {
    console.log("Lista de Alunos:");
    alunos.forEach(aluno => {
        const status = aluno.maiorIdade ? "Maior de Idade" : "Menor de Idade";
        console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, Status: ${status}`);
    });
}

cadastrar("Willian", 19);
cadastrar("Gabs", 21);
cadastrar("Ygor", 19);
cadastrar("João", 16)
listarAlunos();

console.log