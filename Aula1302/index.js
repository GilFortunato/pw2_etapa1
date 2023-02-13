const chalk = require("chalk")
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qual sua linguagem de programação preferida?: ", (linguagem) => {
    console.log(chalk.red("Sua linguagem de programação preferida é: ") + linguagem)
    readline.close()
})