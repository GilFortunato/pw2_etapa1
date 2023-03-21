//#region Modulos Externos
const chalk = require('chalk')
const inquirer = require('inquirer')
//#endregion

//#region Modulos Internos
const fs = require('fs')
//#endregion

//#region Operações Iniciais
function operation(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: [
                'Criar conta',
                'Consultar saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        }
    ]).then((answer) => {
        const action = answer['action']

        if (action === 'Criar conta') {
            console.log('Criando sua conta...')
            createAccount()
        }
        else if (action === 'Consultar saldo') {
            console.log('Consultando saldo...')
        }
        else if (action === 'Depositar') {
            console.log('Depositando...')
        }
        else if (action === 'Sacar') {
            console.log('Sacando...')
        }
        else if (action === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por utilizar o Contas ETEC.'))
            setTimeout(() => {
                process.exit()
            }, 1500);
        }
    })
}
//#endregion

//#region Criação de Contas
function createAccount(){
    console.log(chalk.bgGreen.black("Obrigado por escolher o Banco ETEC."))
    console.log(chalk.green("Defina as opções de conta:"))

    buildAccount()
}

function buildAccount(){
    inquirer.prompt([
        {
            name: "accountName",
            message: "Digite um nome para a sua conta: "
        }
    ]).then((answer) => {
        console.info(answer["accountName"])
        const accountName = answer["accountName"]

        if (!fs.existsSync("accounts")) {
            fs.mkdirSync("accounts")
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black("Esta conta já existe, escolha outro nome!"))
            buildAccount(accountName)
        }

        fs.writeFileSync(
            `accounts/${accountName}.json`,
            "{'balance':0}",
            function (err){
                console.error(err)
            }
        )

        console.info(chalk.green("Parabéns, sua conta foi criada com sucesso!"))
        operation()
    })
}
//#endregion

operation()
