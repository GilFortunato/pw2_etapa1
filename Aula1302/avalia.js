const chalk = require("chalk")
module.exports = {
    mensagem(nota) {
        if (nota >= 6) {
            console.log(chalk.green("O aluno foi aprovado: ") + chalk.black.bgGreen(nota))
        }
        else if (nota >= 5) {
            console.log(chalk.yellow("O aluno está de recuperação: ") + chalk.black.bgYellow(nota))
        }
        else {
            console.log(chalk.red("O aluno foi reprovado: ") + chalk.black.bgRed(nota))
        }
    }
}