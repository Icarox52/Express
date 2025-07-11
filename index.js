const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const dados = {
        nome: "Ícaro Machado",
        idade: 12,
        profissao: "Programador",
        lazer: {
            lazer1: "Jogar",
            lazer2: "Reformar",
            lazer3: "Passear"
        }
    }
    res.render('meusite', dados)
})

app.listen(3000, ()=> {
    console.log("Servidor ligado")
})