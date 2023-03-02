const calculadora = require("./calculadora")
const avalia = require("./avalia")
const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
    {
        name: "nomeAluno",
        message: "Nome do aluno: "
    },
    {
        name: "t1",
        message: "Nota do primeiro trabalho: "
    },
    {
        name: "t2",
        message: "Nota do segundo trabalho: "
    },
    {
        name: "p3",
        message: "Nota da terceira prova: "
    },
    {
        name: "p4",
        message: "Nota da quarta prova: "
    }
]).then((answers) => {
    console.log(`\nSua nota no primeiro trabalho foi: ${answers.t1}`)
    console.log(`Sua nota no segundo trabalho foi: ${answers.t2}`)
    console.log(`Sua nota na terceira prova foi: ${answers.p3}`)
    console.log(`Sua nota na quarta prova foi: ${answers.p4}\n`)

    let media = calculadora.media(answers.t1, answers.t2, answers.p3, answers.p4)

    //console.log(`\nSua média foi: ${media}`)
    avalia.mensagem(media)
})
.catch((erro) => {console.log("Xii, deu erro!")})