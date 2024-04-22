let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

let arrAlunos = []

function cadastrar()
{
    let aluno = 
    {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        serie: document.getElementById('serie').value,
        idade: document.getElementById('idade').value,
        nota1: document.getElementById('nota1').value,
        nota2: document.getElementById('nota2').value,
    }

    arrAlunos.push(aluno)
    console.log(arrAlunos)

    imprimirDados()
}

function calculaMedia(nota1, nota2)
{
    return (parseFloat(nota1) + parseFloat(nota2)) / 2
}

function imprimirDados()
{
    div.innerHTML = ``
    
    for(let i = 0; i < arrAlunos.length; i++)
    {
        let media = calculaMedia(arrAlunos[i].nota1, arrAlunos[i].nota2)

        if(media >= 5)
        {
            div.innerHTML += `
            <tr class="table-success">
                <td>${arrAlunos[i].nome} ${arrAlunos[i].sobrenome}</td>
                <td>${arrAlunos[i].idade}</td>
                <td>${arrAlunos[i].serie}</td>
                <td>${media}</td>
            </tr>
            `
        }
        else
        {
            div.innerHTML += `
            <tr class="table-danger">
                <td>${arrAlunos[i].nome} ${arrAlunos[i].sobrenome}</td>
                <td>${arrAlunos[i].idade}</td>
                <td>${arrAlunos[i].serie}</td>
                <td>${media}</td>
            </tr>
            `
        }
    }
}

btn.addEventListener('click', cadastrar)